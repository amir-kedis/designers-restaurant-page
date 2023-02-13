// import styles
import "reset-css";
import "./style/global.scss";
import createHeader from "./components/header/header";

const header = createHeader();

document.querySelector("#content").appendChild(header);
