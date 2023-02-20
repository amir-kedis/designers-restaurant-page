// import styles
import "reset-css";
import "./style/global.scss";
import "./style/layout.scss";
import createHeader from "./components/header/header";
import createFooter from "./components/footer/footer";
import createHome from "./components/home/home";

const header = createHeader();
const footer = createFooter();
const home = createHome();

document.querySelector("#content").appendChild(header);
document.querySelector("#content").appendChild(home);
document.querySelector("#content").appendChild(footer);
