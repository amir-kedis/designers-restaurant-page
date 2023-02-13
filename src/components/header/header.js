import "./header.scss"

export default function createHeader() {
  const header = document.createElement("header");

  const container = document.createElement("container");
  container.classList.add("container");

  const title = document.createElement("h1");
  title.textContent = "Designers restaurant";

  const nav = document.createElement("nav");

  const links = [
    ["#", "HOME", "active"],
    ["#menu", "MENU", ""],
    ["#about-us", "ABOUT US", ""],
  ];

  links.forEach((link) => {
    const linkEl = document.createElement("a");
    linkEl.href = link[0];
    linkEl.textContent = link[1];
    
    if (link[2]) {
      linkEl.classList.add(link[2]);
    }

    nav.appendChild(linkEl);
  });

  container.appendChild(title);
  container.appendChild(nav);

  header.appendChild(container);

  return header;
}
