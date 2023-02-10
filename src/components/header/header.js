export default function createHeader() {
  const header = document.createElement("header");

  header.innerHTML = `
    <p>HI there</p>
    <button> this is a header</button>
  `;

  return header;
}
