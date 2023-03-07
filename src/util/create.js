export default function create(el, id, classes, parent, txt = "") {
  const Element = document.createElement(el);
  Element.id = id;

  classes.forEach((className) => {
    Element.classList.add(className);
  });

  Element.textContent = txt;

  if (parent) {
    parent.appendChild(Element);
  }

  return Element;
}
export function createImg(el, id, classes, parent, src, alt = "") {
  const image = create(el, id, classes, parent);
  image.src = src;
  image.alt = alt;

  return image;
}
