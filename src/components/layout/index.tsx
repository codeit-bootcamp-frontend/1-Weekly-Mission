import Footer from "components/layout/footer/Footer";
import Header from "components/layout/header/Header";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Body = styled.section`
  flex-grow: 1;
`;

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Container>
  );
}
