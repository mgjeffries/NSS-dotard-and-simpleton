export const businessHTMLCreator = (businessObj) => {
  return `
  <div class="business card">
      <h3>Company Name: ${businessObj.companyName}</h3>
      <div>Industry: ${businessObj.companyIndustry}</div>
      <div>Address: ${businessObj.addressFullStreet}</div>
      <div>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
  </div>
  `
}