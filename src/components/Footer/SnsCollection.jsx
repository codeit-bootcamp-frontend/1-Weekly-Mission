import styled from "styled-components";
import { SnsLogo } from "components";
import facebookIMG from "assets/facebook.svg";
import instagramIMG from "assets/instagram.svg";
import twitterIMG from "assets/twitter.svg";
import youtubeIMG from "assets/youtube.svg";

const StyledSns = styled.div`
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;

  @media (max-width: 767px) {
    flex-grow: 1;
    justify-content: flex-end;
  }
`;

const SnsCollection = () => {
  const snsCollection = [
    ["facebook", facebookIMG, 0],
    ["twitter", twitterIMG, 1],
    ["youtube", youtubeIMG, 2],
    ["instagram", instagramIMG, 3],
  ];

  return (
    <StyledSns>
      {snsCollection.map((item) => {
        return <SnsLogo key={item[2]} brand={item} />;
      })}
    </StyledSns>
  );
};

export default SnsCollection;
