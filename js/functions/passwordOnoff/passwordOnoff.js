import { pipe } from "../default.js";
import { imgs } from "../../constants/imgs.js";
import { locator } from "../checkout/c_common.js";

export const toggleImg = (obj) => {
  if (!obj.img.classList.contains("active")) {
    obj.img.classList.add("active")
    obj.img.setAttribute("src", imgs.on);
    obj.input.setAttribute("type", "text");
    return
  }
  obj.img.classList.remove("active")
  obj.img.setAttribute("src", imgs.off);
  obj.input.setAttribute("type", "password");
  return
}

export const passwordOnoff = pipe(
  locator,
  toggleImg
)