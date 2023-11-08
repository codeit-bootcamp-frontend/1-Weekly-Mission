import HeroContainer from "./HeroContainer";
import Header from "./Header";
import Search from "../components/Search";
import CardList from "../components/CardList";
import Footer from "./Footer";

function Layout({ children, userData }) {
  return (
    <>
      <Header userData={userData}></Header>
      {children}
      <Footer></Footer>
    </>
  );
  return;
}

export default Layout;
