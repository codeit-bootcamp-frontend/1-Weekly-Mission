import * as Styled from "../style/FunctionBtn";

interface Props {
  src: string;
  alt: string;
  href?: string | null;
  children?: string;
}

function FunctionBtn({ src, alt, children }: Props) {
  return (
    <Styled.Div>
      <Styled.Img src={src} alt={alt} />
      <Styled.Btn>{children}</Styled.Btn>
    </Styled.Div>
  );
}

export default FunctionBtn;
