import Header from "../../components/Header/Header";
import Card from "../../components/CardContainer/Card";
import ModalContainer from "../../modals/ModalContainer";
import BlueGradationBtn from "../../components/StyledButtons/BlueGradationBtn";
import ModalTextInput from "../../components/TextInputs/ModalTextInput";
import EditFolderName from "../../modals/contents/EditFolderName";
import ShareFolder from "../../modals/contents/ShareFolder";
import DeleteFolder from "../../modals/contents/DeleteFolder";
import DeleteLink from "../../modals/contents/DeleteLink";
import AddLinkToFolder from "../../modals/contents/AddLinkToFolder";
import AddFolder from "../../modals/contents/AddFolder";
import ReactModal from "react-modal";
import { useState } from "react";

function MainPage() {
  ReactModal.setAppElement("#root");
  const [isOpen, setOpen] = useState(false);
  const data = {
    id: 192,
    created_at: "2023-06-30T08:07:41.588529+00:00",
    updated_at: null,
    url: "https://bootcamp-api.codeit.kr/docs",
    title: null,
    description: null,
    image_source: null,
    folder_id: null,
  };
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Header />
      <Card cardData={data} />
      <AddFolder />
      <button onClick={handleClick}>open</button>
      <AddFolder isOpen={isOpen} />
    </>
  );
}

export default MainPage;
