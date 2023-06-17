
export default function createAbout() {
  const aboutDiv = document.createElement("main");
  aboutDiv.classList.add("about-us");

  const container = document.createElement("div");
  container.classList.add("container");
  aboutDiv.appendChild(container);

  const headline = document.createElement("h2");
  headline.classList.add("fancy-headline");
  headline.textContent = "OUR AMAZING CREW";
  container.appendChild(headline);

  const imageGrid = document.createElement("div");
  imageGrid.classList.add("imageGrid");
  container.appendChild(imageGrid);

  const images = [
    {
      src: "./../../assets/US1.png",
      alt: "Backer Woman 1"
    },
    {
      src: "./../../assets/US2.png",
      alt: "Backer Woman 2"
    },
    {
      src: "../../assets/US3.png",
      alt: "Backer Man"
    }
  ]

  images.forEach(image => {

    let imageBox = document.createElement("div");
    imageBox.classList.add("imageBox");
    imageGrid.appendChild(imageBox);

    let imageEl = document.createElement("img");
    imageEl.src = image.src;
    imageEl.alt = image.alt;
    imageBox.appendChild(imageEl);
  });

  return aboutDiv;
}
