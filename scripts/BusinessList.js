import { businessHTMLCreator } from './Business.js'
import { useBusinesses } from './BusinessProvider.js'
import { filterBusinessNY } from './BuisnessFilter.js'
import { filterBusinessManufacturing } from './BuisnessFilter.js'

export const listNYBusinesses = () => { 
  const contentTarget = document.querySelector(".ny-list")

  const allBuisnessesArray = useBusinesses()
  const nyBusinesses = filterBusinessNY(allBuisnessesArray)

  nyBusinesses.forEach(business => {
    contentTarget.innerHTML += businessHTMLCreator(business)
  });
}

export const listManufacturingBuisnesses = () => {
  const contentTarget = document.querySelector(".manufacturing-list")

  const allBuisnessesArray = useBusinesses()
  const manufacturingBuisnesses = filterBusinessManufacturing(allBuisnessesArray)

  manufacturingBuisnesses.forEach(business => {
    contentTarget.innerHTML += businessHTMLCreator(business)
  });
}