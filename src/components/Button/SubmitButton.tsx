import Link from "next/link";
import theme from "src/styles/Theme/theme";
import styled from "styled-components";

interface Props {
  name: string;
  link: string;
}

function SubmitButton({ name, link }: Props) {
  return (
    <Link href={link}>
      <StyledWrapper>
        <StyledInWrapper>{name}</StyledInWrapper>
      </StyledWrapper>
    </Link>
  );
}

export default SubmitButton;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.8rem 0.9rem;
  border-radius: 0.8rem;
  width: 100%;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);

  @media (max-width: 767px) and (min-width: 375px) {
    width: 400px;
  }
`;

const StyledInWrapper = styled.div`
  color: ${theme.color.white};
  font-size: 1.4rem;
  font-weight: ${theme.fontWeight.normal};
`;
