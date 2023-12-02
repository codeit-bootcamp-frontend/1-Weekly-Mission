import Header from "@/components/Header/Header";
import ReactModal from "react-modal";
import Input from "@/components/TextInputs/Input";

function MainPage() {
  ReactModal.setAppElement("#react-modals");

  return (
    <>
      <Header />
      <Input />
    </>
  );
}

export default MainPage;
