export default function createElementDP(str) {
  const parser = new DOMParser();

  const createdElement = parser.parseFromString(str, "text/html");

  return createdElement.body.firstChild;
}
