import styled from "styled-components";

type buttonSizeType = "short" | "long" | "wide";

interface CTAProps {
  readonly $size: string;
  readonly $buttoncolor: string;
}

interface ButtonProps {
  size: buttonSizeType;
  text: string;
  buttonColor: string;
}

const Button = ({
  size: buttonWidth,
  text,
  buttonColor = "blue",
}: ButtonProps) => {
  return (
    <StyledCTA $size={buttonWidth} $buttoncolor={buttonColor}>
      <span>{text}</span>
    </StyledCTA>
  );
};

export default Button;

const StyledCTA = styled.button<CTAProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  cursor: pointer;
  background: ${({ $buttoncolor }) =>
    $buttoncolor === "red"
      ? "var(--linkbrary-red)"
      : "var(--linkbrary-button-gradient)"};
  border-radius: 0.8rem;
  color: var(--linkbrary-button-text);
  font-size: 1.8rem;
  font-weight: 600;

  width: ${({ $size }) =>
    $size === "short" ? "12.8rem" : $size === "long" ? "28rem" : "100%"};
  border: none;
  transition: ease-in-out 0.1s;

  &:hover {
    transform: scale(1.01);
    transition: ease-in-out 0.1s;
  }

  @media screen and (max-width: 767px) {
    /* height: 3.7rem; */
    /* font-size: 1.4rem; */

    width: ${({ $size }) =>
      $size === "short" ? "8rem" : $size === "long" ? "20rem" : "100%"};
    padding: ${({ $size }) =>
      $size === "short" ? "1.2rem 1rem" : "auto auto"};
    gap: ${({ $size }) => ($size === "short" ? "1rem" : "0rem")};
  }
`;
