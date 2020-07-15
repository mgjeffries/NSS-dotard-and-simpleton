import { businessHTMLCreator } from './Business.js'
import { useBusinesses } from './BusinessProvider.js'
import { filterBusinessNY } from './BuisnessFilter.js'
import { filterBusinessManufacturing } from './BuisnessFilter.js'

export const listBusinesses = () => { 
  const contentTarget = document.querySelector(".business-list")

  const allBuisnessesArray = useBusinesses()
  const nyBusinesses = filterBusinessNY(allBuisnessesArray)
  const manufacturingBuisnesses = filterBusinessManufacturing(allBuisnessesArray)

  nyBusinesses.forEach(business => {
    contentTarget.innerHTML += businessHTMLCreator(business)
  });
  manufacturingBuisnesses.forEach(business => {
    contentTarget.innerHTML += businessHTMLCreator(business)
  });
}