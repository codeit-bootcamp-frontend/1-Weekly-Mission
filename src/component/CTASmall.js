import * as Styled from "../style/Btn.js";

export function CTASmall({ href, children }) {
  return <Styled.BtnSmall href={href}>{children}</Styled.BtnSmall>;
}
export default CTASmall;
