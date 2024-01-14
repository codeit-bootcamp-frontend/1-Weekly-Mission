import Footer from "@/components/footer/Footer";
import GlobalNav from "@/components/globalNav/GlobalNav";
import * as S from "@/layouts/globalLayout/GlobalLayout.style";
function GlobalLayout() {
  return (
    <S.GlobalLayout>
      <GlobalNav />
      <S.MainContent></S.MainContent>
      <Footer />
    </S.GlobalLayout>
  );
}
