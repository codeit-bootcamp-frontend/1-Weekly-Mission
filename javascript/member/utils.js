/* 요소 하나 선택 함수  */
function $(selector) {
    return document.querySelector(selector);
}

/* 요소 여러개 선택 함수 */
function $all(selector) {
    return document.querySelectorAll(selector);
}

export {$, $all};