import "./Footer.css";
const template = () => `
<h3><span>Gaming </span> Zone</h3>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
