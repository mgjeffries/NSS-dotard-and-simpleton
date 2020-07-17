import { businessHTMLCreator } from './Business.js'
import { purchasingAgentHTMLCreator } from './PurchasingAgent.js'
import { useBusinesses, findBusinesses, usePurchasingAgents } from './BusinessProvider.js'
import { filterBusinessNY, filterBusinessManufacturing } from './BuisnessFilter.js'

export const listNYBusinesses = () => {
  domModifier(".ny-list", useBusinesses(), filterBusinessNY, businessHTMLCreator)
}

export const listManufacturingBuisnesses = () => {
  domModifier(".manufacturing-list", useBusinesses(), filterBusinessManufacturing, businessHTMLCreator)
}

export const listPurchasingAgents = () => {
  domModifier(".purchasing-agents", usePurchasingAgents(), noFilter, purchasingAgentHTMLCreator)
}

const companySearchForm = document.querySelector("#company-search")

companySearchForm.addEventListener("keypress", keyPressEvent => {
  if (keyPressEvent.charCode === 13) {
    const searchResultData = findBusinesses(keyPressEvent.target.value)
    console.log(searchResultData)
    
    // Clear out any previous search results
    document.querySelector(".found-companies").innerHTML = ""

    domModifier(".found-companies", searchResultData, noFilter, businessHTMLCreator)
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



