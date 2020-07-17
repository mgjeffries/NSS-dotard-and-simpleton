import { businessHTMLCreator } from './business.js'
import { purchasingAgentHTMLCreator } from './purchasingAgent.js'
import { findBusinesses, findPurchasingAgents } from './dataProvider.js'

const companySearchForm = document.querySelector("#company-search")

companySearchForm.addEventListener("keypress", keyPressEvent => {
  if (keyPressEvent.charCode === 13) {
    const searchResultData = findBusinesses(keyPressEvent.target.value)

    domModifier(".found-companies", searchResultData, businessHTMLCreator)
  }
})

const agentSearchForm = document.querySelector("#purchasing-agent-search")

agentSearchForm.addEventListener("keypress", keyPressEvent => {
  if (keyPressEvent.charCode === 13) {
    const searchResultData = findPurchasingAgents(keyPressEvent.target.value)
 
    domModifier(".found-purchasing-agents", searchResultData, purchasingAgentHTMLCreator)
  }
})

const domModifier = (target, objectArray, htmlCreator) => {
  const contentTarget = document.querySelector(target)

  // Clear out any previous search results
  contentTarget.innerHTML = ''
  objectArray.forEach(object => {
    contentTarget.innerHTML += htmlCreator(object)
  });
}

