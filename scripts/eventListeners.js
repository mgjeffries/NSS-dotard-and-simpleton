import { businessHTMLCreator } from './business.js'
import { purchasingAgentHTMLCreator } from './purchasingAgent.js'
import { findBusinesses, findPurchasingAgents } from './dataProvider.js'


export const startListeners = () => {
  listenForEvent("#purchasing-agent-search", findPurchasingAgents, ".found-purchasing-agents", purchasingAgentHTMLCreator)
  listenForEvent("#company-search", findBusinesses, ".found-companies", businessHTMLCreator)
}

const listenForEvent = (formID, getDataFunction, targetID, htmlCreator) => {
  const agentSearchForm = document.querySelector(formID)

  agentSearchForm.addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
      const searchResultData = getDataFunction(keyPressEvent.target.value)
  
      domModifier(targetID, searchResultData, htmlCreator)
    }
  })
}


const domModifier = (target, objectArray, htmlCreator) => {
  const contentTarget = document.querySelector(target)

  // Clear out any previous search results
  contentTarget.innerHTML = ''
  objectArray.forEach(object => {
    contentTarget.innerHTML += htmlCreator(object)
  });
}



