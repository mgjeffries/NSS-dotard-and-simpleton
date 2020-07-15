import { businessHTMLCreator } from './Business.js'
import { useBusinesses } from './BusinessProvider.js'
import { filterBusinesses } from './BuisnessFilter.js'

export const listBusinesses = () => { 
  const contentTarget = document.querySelector(".business-list")

  const allBuisnessesArray = useBusinesses()
  const filteredBusinessArray = filterBusinesses(allBuisnessesArray)

  filteredBusinessArray.forEach(business => {
    contentTarget.innerHTML += businessHTMLCreator(business)
  });
}