const BREAKPOINT_TABLET = 767;
const BREAKPOINT_PC = 1199;

export const onTablet = `@media only screen and (min-width: ${BREAKPOINT_TABLET}px) and (max-width: ${
  BREAKPOINT_PC - 1
}px)`;
export const onPc = `@media only screen and (min-width: ${BREAKPOINT_PC}px)`;
