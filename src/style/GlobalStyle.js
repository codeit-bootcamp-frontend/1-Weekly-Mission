import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

import { cursorPointer, flexCenter } from "./common";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
${reset}
${colors}
${flexCenter}
${cursorPointer}`;
