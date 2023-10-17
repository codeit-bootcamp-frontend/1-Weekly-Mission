import { htmlClasses } from "../constants/cssClass.js";

export class Dom {
  // 배열 htmlClasses를 받아서, 같은 클래스 내의 요소들을 Id에 따라 추가하는 생성자 함수
  constructor(arr) {
    Object.assign(this, arr.reduce((acc, cur) => this.elementFromClassToId(acc, ...cur), {}));
  }
  // 생성자 함수에서 이용하는 메서드
  elementFromClassToId(obj, className, collentionName) {
    const tags = document.querySelectorAll(className)
    obj[collentionName] = tags;
    for (const tag of tags) {
      obj[tag.id] = tag;
    }
    return obj
  }
}

export const $dom = new Dom(htmlClasses);