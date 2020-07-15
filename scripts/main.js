import { useBusinesses } from './BusinessProvider.js'
import { businessHTMLCreator } from './Business.js';

const contentTarget = document.querySelector(".business-list")

const allBuisnessesArray = useBusinesses()

allBuisnessesArray.forEach(business => {
  contentTarget.innerHTML += businessHTMLCreator(business)
});