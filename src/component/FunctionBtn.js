import * as Styled from "../style/FunctionBtn.js";

function FunctionBtn({ src, alt, href, children }) {
  return (
    <Styled.Div>
      <Styled.Img src={src} alt={alt} />
      <Styled.Btn href={href}>{children}</Styled.Btn>
    </Styled.Div>
  );
}

export default FunctionBtn;
