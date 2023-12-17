import styled from "styled-components";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HeroHeader from "../containers/Home/HeroHeader";
import Home from "../containers/Home/Home";
import useGetUserInfo from "@/hooks/useGetUserInfo";

const HomePage = () => {
  const fixedBool = true;
  const { userData } = useGetUserInfo();
  return (
    <>
      <StyledHeader>
        <Navbar userData={userData} fixed={fixedBool} />
        <HeroHeader />
      </StyledHeader>
      <Home />
      <Footer />
    </>
  );
};

export default HomePage;

const StyledHeader = styled.header`
  margin-top: 9.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--linkbrary-bg);
`;
