import { pipe } from "../default.js";
import { locator, resetError } from "./c_common.js";

export const common_reset = pipe(
  locator,
  resetError
)

export const common_preventDefault = (obj) => {
  obj.event.preventDefault();
  return obj;
}