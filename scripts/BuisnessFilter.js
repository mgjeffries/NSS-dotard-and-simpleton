export const filterBusinessNY = ( allBuisnesses ) => {
  return allBuisnesses.filter(buisnessObj => {
    if (buisnessObj.addressStateCode === "NY") {
      return true
    }
    else {
      return false
    } 
  })
}

export const filterBusinessManufacturing = ( allBuisnesses ) => {
  return allBuisnesses.filter(buisnessObj => {
    if (buisnessObj.companyIndustry === "Manufacturing") {
      return true
    }
    else {
      return false
    } 
  })
}