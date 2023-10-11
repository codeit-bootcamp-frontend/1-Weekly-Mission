import { pipe } from "../default";
import { locator, isValue, printError, resetError } from "./c_common";
import { regPassword, savePassword } from "./c_password";

export const common_reset = pipe(
  locator,
  resetError
)

export const common_password = pipe(
  locator,
  isValue,
  printError,
  regPassword,
  printError,
  savePassword,
)
