import styled from "styled-components";
import logoIMG from "assets/Linkbrary.svg";

const StyledImg = styled.img`
  height: 2.4rem;

  @media (max-width: 767px) {
    height: 1.6rem;
  }
`;

const Logo = () => {
  return (
    <>
      <a href="/">
        <StyledImg src={logoIMG} alt="Linkbrary 로고" />
      </a>
    </>
  );
};

export default Logo;
