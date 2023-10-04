/***
 * node Event Utils
 */

function createNode(tag, className, text) {
  let newNode = document.createElement(tag);
  newNode.className = className;
  newNode.textContent = text;
  return newNode;
}

export { createNode };
