import Nav from "./nav/Nav";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

const App = () => {
  // const user_name = "@코드잇";
  // const folder_name = "⭐️ 즐겨찾기";

  return (
    <>
      <Nav />
      {/* <Header>{[user_name, folder_name]}</Header> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
