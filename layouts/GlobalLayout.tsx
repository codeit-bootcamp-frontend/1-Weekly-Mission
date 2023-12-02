import { UserProvider } from "@/utils/UserContext";
import GlobalNav from "../components/globalNav/GlobalNav";
import Footer from "../components/footer/Footer";
import * as S from "@/layouts/GlobalLayout.style";
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
