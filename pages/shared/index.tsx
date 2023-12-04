import { GetStaticProps, InferGetStaticPropsType } from "next";
import styled from "styled-components";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ShareContainer from "@/containers/Share/ShareContainer";
import { fetchSampleFolder } from "@/api/sampleFolder.api";
import { fetchUserProfileSample } from "@/api/sampleUser.api";

export const getStaticProps: GetStaticProps = async () => {
  const userProfile = await fetchUserProfileSample();
  const sampleFolder = await fetchSampleFolder();
  return { props: { sampleFolder, userProfile } };
};

function SharePage({
  userProfile,
  sampleFolder,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const fixedBool = true;

  const handleSearchbar = (searchedText: string) => {};

  return (
    <>
      <StyledHeader>
        <Navbar userData={userProfile} fixed={fixedBool} />
      </StyledHeader>
      <ShareContainer
        shareData={sampleFolder}
        handleSearchbar={handleSearchbar}
      />
      <Footer />
    </>
  );
}

export default SharePage;

const StyledHeader = styled.header`
  margin-top: 9.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--linkbrary-bg);
`;
