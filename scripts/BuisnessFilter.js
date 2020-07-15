export const filterBusinesses = ( allBuisnesses ) => {
  return allBuisnesses.filter(buisnessObj => {
    if (buisnessObj.addressStateCode === "NY") {
      return true
    }
    else {
      return false
    } 
  })
}