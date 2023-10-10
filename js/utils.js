// 요소 하나 선택 함수
function $(selector) {
    return document.querySelector(selector);
}

// 요소 여러개 선택 함수
function $all(selector) {
    return document.querySelectorAll(selector);
}

// 클래스 추가 함수
function addClass(element, className){
    element.classList.add(className);
}

// 클래스 제거 함수
function removeClass(element, className){
    element.classList.remove(className);
}

// 요소 생성 함수
function createElement(tagName = "span") {
    return document.createElement(tagName);
}

export { $, $all, addClass, removeClass, createElement };