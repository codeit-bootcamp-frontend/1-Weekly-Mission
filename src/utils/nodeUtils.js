/***
 * node Event Utils
 */

/**새 노드 생성 함수
 *
 * @param {string} tag 생성할 태그명
 * @param {string} className 부여할 클래스명
 * @param {string} text 태그에 넣을 내용
 * @returns {object} newNode
 */
function createNode(tag, className, text) {
  let newNode = document.createElement(tag);
  newNode.className = className;
  newNode.textContent = text;
  return newNode;
}

export { createNode };
