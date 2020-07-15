import { businessHTMLCreator } from './Business.js'
import { useBusinesses } from './BusinessProvider.js'
import { filterBusinessNY } from './BuisnessFilter.js'
import { filterBusinessManufacturing } from './BuisnessFilter.js'

export const listNYBusinesses = () => {
  domModifier(".ny-list", filterBusinessNY)
}

export const listManufacturingBuisnesses = () => {
  domModifier(".manufacturing-list", filterBusinessManufacturing)
}

const domModifier = (target, filter) => {
  const contentTarget = document.querySelector(target)

  const allBuisnessesArray = useBusinesses()
  const filteredBuisness = filter(allBuisnessesArray)

  filteredBuisness.forEach(business => {
    contentTarget.innerHTML += businessHTMLCreator(business)
  });
}