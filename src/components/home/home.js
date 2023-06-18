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
    create("p", "", [], text, txt);
  });

  create("a", "", ["btn", "btn--fancy"], text, "LET'S EAT");

  /// create images part
  const fancyImage = create("div", "", ["fancy-image"], container);

  createImg(
    "img",
    "greenBlob",
    ["blob-image"],
    fancyImage,
    greenBlobPath,
    "green blob"
  );
  createImg(
    "img",
    "header-img",
    [],
    fancyImage,
    headerImagePath,
    "food image"
  );
  createImg(
    "img",
    "YellowBlob",
    ["blob-image"],
    fancyImage,
    yellowBlobPath,
    "yellow blob"
  );
  createImg(
    "img",
    "pinkBlob",
    ["blob-image"],
    fancyImage,
    pinkBlobPath,
    "yellow blob"
  );

  return home;
}
