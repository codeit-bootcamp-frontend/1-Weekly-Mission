import 'styled-components';
import { ColorTypes } from './theme';

declare module 'styled-components' {
  //styled-component type 확장
  export interface DefaultTheme {
    color: ColorTypes;
  }
}
