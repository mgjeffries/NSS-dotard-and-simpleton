import { businessHTMLCreator } from './Business.js';
import { useBusinesses } from './BusinessProvider.js'

export const listBusinesses = () => { 
  const contentTarget = document.querySelector(".business-list")

  const allBuisnessesArray = useBusinesses()

  allBuisnessesArray.forEach(business => {
    contentTarget.innerHTML += businessHTMLCreator(business)
  });
}