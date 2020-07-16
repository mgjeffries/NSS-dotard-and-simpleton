export const purchasingAgentHTMLCreator = (agentObj) => {
  return `
  <div class="purchaing-agent card">
    <h3>Purhcasing Agent: ${agentObj.fullName}</h3>
    <div>Company Name: ${agentObj.companyName}</div>
    <div>Work Phone: ${agentObj.phoneWork}</div>
  </div>
  `
}