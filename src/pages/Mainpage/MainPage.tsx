import Header from "../../components/Header/Header";
import ReactModal from "react-modal";
import Input from "../../components/TextInputs/Input";

function MainPage() {
  ReactModal.setAppElement("#root");

  return (
    <>
      <Header />
      <Input></Input>
    </>
  );
}

export default MainPage;
