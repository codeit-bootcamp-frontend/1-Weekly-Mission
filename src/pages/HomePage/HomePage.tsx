import Layout from "../../commons/components/Layout/Layout";
import styled from "styled-components";

function HomePage() {
  const testDeco = styled.p`
    color: #242424;
  `;

  return (
    <Layout isSticky={true}>
      <div>임시 홈페이지</div>
    </Layout>
  );
}

export default HomePage;
