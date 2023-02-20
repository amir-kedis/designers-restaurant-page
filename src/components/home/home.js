import "./home.scss";

export default function createHome() {
  const home = document.createElement("main");
  home.classList.add("home");

  home.innerHTML = ``;

  return home;
}
