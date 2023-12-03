import Header from "@/components/Header/Header";
import ReactModal from "react-modal";
import Input from "@/components/Inputs/Input";

function MainPage() {
  ReactModal.setAppElement("#react-modals");

  return (
    <>
      <Header />
    </>
  );
}

export default MainPage;
