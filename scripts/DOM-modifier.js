import { businessHTMLCreator } from './Business.js'
import { purchasingAgentHTMLCreator } from './PurchasingAgent.js'
import { useBusinesses } from './BusinessProvider.js'
import { usePurchasingAgents } from './BusinessProvider.js'
import { filterBusinessNY } from './BuisnessFilter.js'
import { filterBusinessManufacturing } from './BuisnessFilter.js'


export const listNYBusinesses = () => {
  domModifier(".ny-list", useBusinesses, filterBusinessNY, businessHTMLCreator)
}

export const listManufacturingBuisnesses = () => {
  domModifier(".manufacturing-list", useBusinesses, filterBusinessManufacturing, businessHTMLCreator)
}

export const listPurchasingAgents = () => {
  domModifier(".purchasing-agents", usePurchasingAgents, noFilter, purchasingAgentHTMLCreator)
}

const domModifier = (target, data, filter, htmlCreator) => {
  const contentTarget = document.querySelector(target)

  const allBuisnessesArray = data()
  const filteredBuisness = filter(allBuisnessesArray)

  filteredBuisness.forEach(business => {
    contentTarget.innerHTML += htmlCreator(business)
  });
}

const noFilter = (obj) => obj