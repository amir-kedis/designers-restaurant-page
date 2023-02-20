import "./home.scss";

export default function createHome() {
  const home = document.createElement("main");
  home.classList.add("home");

  const container = document.createElement("div");
  container.classList.add("container");

  const text = document.createElement("div");
  text.classList.add("text");

  const textContentArr = [
    "EAT WHAT YOUR HEART DESIRES",
    "IN THE PLACE YOUR HEART",
    "DESIRES",
  ];

  textContentArr.forEach((txt, id) => {
    const pEl = document.createElement("p");
    pEl.textContent = txt;
    text.appendChild(pEl);
  });

  container.appendChild(text);

  const fancyBtn = document.createElement("a");
  fancyBtn.textContent = "LET'S EAT";
  fancyBtn.classList.add("btn", "btn--fancy");

  text.appendChild(fancyBtn);

  home.appendChild(container);

  return home;
}
