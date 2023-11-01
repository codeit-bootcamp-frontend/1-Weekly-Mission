import * as Styled from "../style/Btn.js";

function CTA({ href, children }) {
  return <Styled.Btn href={href}>{children}</Styled.Btn>;
}

export default CTA;
