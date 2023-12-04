import Footer from "@/components/footer/Footer";
import { GlobalNav } from "@/components/globalNav/GlobalNav.style";
import * as S from "@/layouts/globalLayout/GlobalLayout.style";
import { UserProvider } from "@/utils/UserContext";
function GlobalLayout() {
  return (
    <UserProvider>
      <S.GlobalLayout>
        <GlobalNav />
        <S.MainContent></S.MainContent>
        <Footer />
      </S.GlobalLayout>
    </UserProvider>
  );
}

export default GlobalLayout;
