import { htmlClasses } from "../constants/cssClass.js";

export class Dom {
  constructor(arr) {
    Object.assign(this, arr.reduce((acc, cur) => this.elementFromClassToId(acc, ...cur), {}));
  }
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