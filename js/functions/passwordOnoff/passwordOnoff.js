import { pipe } from "../default";
import { locator } from "../checkout/c_common";

export const toggleImg = (obj) => {
  obj.input.focus();
  if (!obj.class) {
    obj.img.setAttribute("src", imgs.on);
    obj.input.setAttribute("type", "text");
    obj.class = "active"
    return
  }
  $img.setAttribute("src", variable.imgs.off);
  $input.setAttribute("type", "password");
  obj.class = "";
  return
}

export const passwordOnoff = pipe(
  locator,
  toggleImg
)