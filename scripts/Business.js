export const businessHTMLCreator = (businessObj) => {
  return `
  <div class="business">
      <h3>Company Name: ${businessObj.companyName}</h3>
      <div>Industry: ${businessObj.companyIndustry}</div>
      <div>Purhcasing Agent: ${businessObj.purchasingAgent.nameFirst} ${businessObj.purchasingAgent.nameLast}</div>
      <div>Work Phone: ${businessObj.phoneWork}</div>
      <div>Address: ${businessObj.addressFullStreet}</div>
      <div>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
  </div>
  `
}