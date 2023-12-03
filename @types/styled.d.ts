import "styled-components";
import { ColorsTypes, FontWeightTypes } from "styles/Theme/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorsTypes;
    fontWeight: FontWeightTypes;
  }
}
