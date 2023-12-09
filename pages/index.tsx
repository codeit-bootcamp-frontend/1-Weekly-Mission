import { Article, Header } from "@/components";
import * as Styled from "@/style/HomePage.styled";

export default function Home() {
  return (
    <Styled.Container>
      <Header />
      <Article />
    </Styled.Container>
  );
}
