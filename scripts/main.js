import { businessHTMLCreator } from './Business.js'
import { purchasingAgentHTMLCreator } from './PurchasingAgent.js'
import { findBusinesses, findPurchasingAgents } from './BusinessProvider.js'

const companySearchForm = document.querySelector("#company-search")

companySearchForm.addEventListener("keypress", keyPressEvent => {
  if (keyPressEvent.charCode === 13) {
    const searchResultData = findBusinesses(keyPressEvent.target.value)

    
    // Clear out any previous search results
    document.querySelector(".found-companies").innerHTML = ""

    domModifier(".found-companies", searchResultData, noFilter, businessHTMLCreator)
  }
})

const agentSearchForm = document.querySelector("#purchasing-agent-search")

agentSearchForm.addEventListener("keypress", keyPressEvent => {
  if (keyPressEvent.charCode === 13) {
    const searchResultData = findPurchasingAgents(keyPressEvent.target.value)
 
    
    // Clear out any previous search results
    document.querySelector(".found-purchasing-agents").innerHTML = ""

    domModifier(".found-purchasing-agents", searchResultData, noFilter, purchasingAgentHTMLCreator)
  }
})

const domModifier = (target, data, filter, htmlCreator) => {
  const contentTarget = document.querySelector(target)

  const allBuisnessesArray = data
  const filteredBuisness = filter(allBuisnessesArray)

  filteredBuisness.forEach(business => {
    contentTarget.innerHTML += htmlCreator(business)
  });
}

const noFilter = (obj) => obj