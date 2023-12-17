import Footer from "@/components/footer/Footer";
import GlobalNav from "@/components/globalNav/GlobalNav";
import * as S from "@/layouts/globalLayout/GlobalLayout.style";
import { AuthProvider } from "@/utils/AuthProvider";
function GlobalLayout() {
  return (
    <AuthProvider>
      <S.GlobalLayout>
        <GlobalNav />
        <S.MainContent></S.MainContent>
        <Footer />
      </S.GlobalLayout>
    </AuthProvider>
  );
}

export default GlobalLayout;
