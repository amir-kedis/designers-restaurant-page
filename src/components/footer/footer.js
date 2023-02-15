import "./footer.scss";

export default function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
        <div class="container">
            <p>
                DESIGNED BY Amir_Kedis
            </p>
            <a href="https://github.com/amir-kedis" target="_blank" class="btn btn--check">
                CHECK ME OUT
            </a>
        </div>
    `;
  return footer;
}
