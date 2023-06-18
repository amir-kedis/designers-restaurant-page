// Styles
import './about.scss'

// MENU images
import image_1 from "../../assets/US1.png"
import image_2 from "../../assets/US2.png"
import image_3 from "../../assets/US3.png"

// Blobs images
import blob_1 from "../../assets/pink-blob.png"
import blob_2 from "../../assets/blue-blob-.png"
import blob_3 from "../../assets/green-blob.png"
import blob_4 from "../../assets/pink-blob-2.png"
import blob_5 from "../../assets/yellow-blob.png"

// arrow image
import arrowSrc from "../../assets/arrow.png"

export default function createAbout() {
  const aboutDiv = document.createElement("main");
  aboutDiv.classList.add("about-us");

  const container = document.createElement("div");
  container.classList.add("container");
  aboutDiv.appendChild(container);

  ////////////////////////////////////
  //          HEADLINE              //
  ////////////////////////////////////
  const headline = document.createElement("h2");
  headline.classList.add("fancy-headline");
  headline.textContent = "OUR AMAZING CREW";
  container.appendChild(headline);


  ////////////////////////////////////
  //          IMAGE GRID            //
  ////////////////////////////////////
  const imageGrid = document.createElement("div");
  imageGrid.classList.add("imageGrid");
  container.appendChild(imageGrid);



  const images = [
    {
      src: image_1,
      alt: "Backer Woman 1"
    },
    {
      src: image_2,
      alt: "Backer Woman 2"
    },
    {
      src: image_3,
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

  //////////////////////////////////
  //            BLOBS             //
  //////////////////////////////////
  const NUMBER_OF_BLOBS = 8;
  const NUMBER_OF_SRCS = 5;
  const blobSrcs = [
    blob_1,
    blob_2,
    blob_3,
    blob_4,
    blob_5
  ];

  for (let i = 0; i < NUMBER_OF_BLOBS; i++) {
    let blob = document.createElement("img");
    blob.classList.add("blob", `blob-${i}`);
    blob.src = blobSrcs[i % NUMBER_OF_SRCS];
    blob.alt = "blob";
    aboutDiv.appendChild(blob);
  }


  //////////////////////////////////
  //              CTA             // 
  //////////////////////////////////
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("btnContainer")

  let btn = document.createElement("button")
  btn.classList.add("btn", "btn-about")
  btn.textContent = "LET'S EAT"

  let arrow = document.createElement("img")
  arrow.classList.add("arrow")
  arrow.src = arrowSrc

  btnContainer.appendChild(btn)
  btnContainer.appendChild(arrow)
  aboutDiv.appendChild(btnContainer)

  return aboutDiv;
}
