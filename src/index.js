// import styles
import "reset-css";
import "./style/global.scss";
import "./style/layout.scss";
import createHeader from "./components/header/header";
import createFooter from "./components/footer/footer";
import createHome from "./components/home/home";
import createMenu from "./components/menu/menu";

const header = createHeader();
const footer = createFooter();
const home = createHome();
const menu = createMenu();

document.querySelector("#content").appendChild(header);
//document.querySelector("#content").appendChild(home);
document.querySelector("#content").appendChild(menu);
document.querySelector("#content").appendChild(footer);
