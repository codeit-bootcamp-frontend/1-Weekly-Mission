import Header from "../../components/Header/Header";
import ReactModal from "react-modal";

function MainPage() {
  ReactModal.setAppElement("#root");

  return (
    <>
      <Header />
    </>
  );
}

export default MainPage;
