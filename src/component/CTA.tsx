import * as Styled from "../style/Btn";

function CTA({ href, children }) {
  return <Styled.Link href={href}>{children}</Styled.Link>;
}

export default CTA;
