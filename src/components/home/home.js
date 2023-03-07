import "./home.scss";
import headerImagePath from "./../../assets/header-img.png";
import greenBlobPath from "./../../assets/green-blob.png";
import yellowBlobPath from "./../../assets/yellow-blob.png";
import pinkBlobPath from "./../../assets/pink-blob.png";

import create from "./../../util/create";
import { createImg } from "./../../util/create";

export default function createHome() {
  const home = create("main", "home", ["home"], "");

  const container = create("div", "", ["container"], home);

  const text = create("div", "text", ["text"], container);

  const textContentArr = [
    "EAT WHAT YOUR HEART DESIRES",
    "IN THE PLACE YOUR HEART",
    "DESIRES",
  ];

  textContentArr.forEach((txt) => {
    const pEl = create("p", "", [], text, txt);
  });

  const fancyBtn = create("a", "", ["btn", "btn--fancy"], text, "LET'S EAT");

  /// create images part
  const fancyImage = create("div", "", ["fancy-image"], container);

  const headerImage = createImg(
    "img",
    "header-img",
    [],
    fancyImage,
    headerImagePath,
    "food image"
  );
  const greenBlob = createImg(
    "img",
    "greenBlob",
    [],
    fancyImage,
    greenBlobPath,
    "green blob"
  );
  const YellowBlob = createImg(
    "img",
    "YellowBlob",
    [],
    fancyImage,
    yellowBlobPath,
    "yellow blob"
  );
  const pinkBlob = createImg(
    "img",
    "pinkBlob",
    [],
    fancyImage,
    pinkBlobPath,
    "yellow blob"
  );

  return home;
}
