// import styles
import "reset-css";
import "./style/global.scss";
import "./style/layout.scss";
import createHeader from "./components/header/header";
import createFooter from "./components/footer/footer";

const header = createHeader();
const footer = createFooter();

document.querySelector("#content").appendChild(header);
document.querySelector("#content").appendChild(document.createElement("div"));
document.querySelector("#content").appendChild(footer);
