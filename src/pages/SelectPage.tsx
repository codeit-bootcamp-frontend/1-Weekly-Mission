import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const LinkBox = styled(Link)`
  position: relative;
  top: 100px;
  left: 100px;
  margin: 10px;
  padding: 10px;
  border: 3px solid pink;

  font-size: 40px;
`;

function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <LinkBox to="/shared">shared</LinkBox>
      <LinkBox to="/folder">folder</LinkBox>
    </>
  );
}

export default HomePage;
