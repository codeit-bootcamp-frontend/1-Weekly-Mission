import * as Styled from "../style/Btn.js";

export function CTASmall({ href, children }) {
  return <Styled.LinkSmall href={href}>{children}</Styled.LinkSmall>;
}
export default CTASmall;
