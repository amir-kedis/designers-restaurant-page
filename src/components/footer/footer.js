import "./footer.scss";

export default function createFooter() {
  
  const footer = document.createElement("footer");
  const container = document.createElement("div");
  container.classList.add("container");
  const footerP = document.createElement("p");
  footerP.textContent = "DESIGNED BY Amir_Kedis";
  const btn = document.createElement("a");
  btn.classList.add("btn");
  btn.classList.add("btn--check");
  btn.href = "https://github.com/amir-kedis";
  btn.textContent = "CHECK ME OUT";

  container.appendChild(footerP);
  container.appendChild(btn);

  footer.appendChild(container);

  return footer;
}
