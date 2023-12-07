import styled from "styled-components";

import { useFetchUserProfileSample } from "@/api/fetch";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HeroHeader from "../containers/Home/HeroHeader";
import Home from "../containers/Home/Home";

const HomePage = () => {
  const { data, isLoading } = useFetchUserProfileSample();
  const fixedBool = true;

  if (isLoading || !data) return null;
  return (
    <>
      <StyledHeader>
        <Navbar userData={data} fixed={fixedBool} />
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
