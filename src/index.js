// import styles
import "reset-css";
import "./style/global.scss";
import "./style/layout.scss";
import createHeader from "./components/header/header";
import createFooter from "./components/footer/footer";
import createHome from "./components/home/home";
import createMenu from "./components/menu/menu";
import createAbout from "./components/about/about";

// current visible page
const pages = {
  HOME: 0,
  MENU: 1,
  ABOUT: 2
}

let currnetPage = pages.HOME;

function changePage(e) {
  console.log(e.target.textContent);

  let clickItem = e.target.textContent;

  if (clickItem.toUpperCase() == "HOME") {
    currnetPage = pages.HOME;
  } else if (clickItem.toUpperCase() == "ABOUT US") {
    currnetPage = pages.ABOUT;
  } else if (clickItem.toUpperCase() == "MENU") {
    currnetPage = pages.MENU;
  } else {
    currnetPage = pages.HOME;
  }
}


function render() {
  const contentDiv = document.querySelector('#content');

  // remove existing divs if they exist 
  if (contentDiv.querySelector('main')) {
    contentDiv.removeChild(contentDiv.querySelector('main'));
  }

  if (contentDiv.querySelector('footer')) {
    contentDiv.removeChild(contentDiv.querySelector('footer'));
  }


  const footer = createFooter();

  let header = contentDiv.querySelector('header');

  if (!header) {
    header = createHeader();
    contentDiv.appendChild(header);


    // add event listner
    const links = header.querySelectorAll('a');

    [...links].forEach(link => {
      console.log(link);
      link.addEventListener('click', (e) => {
        changePage(e);
        render();
      });
    });

  }

  switch (currnetPage) {
    case pages.HOME:
      const home = createHome();
      contentDiv.appendChild(home);
      break;
    case pages.MENU:
      const menu = createMenu();
      contentDiv.appendChild(menu);
      break;
    case pages.ABOUT:
      const about = createAbout();
      contentDiv.appendChild(about);
      break;
    default:
      const homeD = createHome();
      contentDiv.appendChild(homeD);
      break;
  }

  contentDiv.appendChild(footer);
}

render();


