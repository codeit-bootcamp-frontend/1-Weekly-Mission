import { Link } from "react-router-dom";
import { useState } from "react";
import useModal from "src/hooks/useModal";
import useData from "src/hooks/useData";
import imgAdd from "src/assets/add.svg";
import imgAddWhite from "src/assets/addWhite.svg";
import imgShare from "src/assets/share.svg";
import imgEdit from "src/assets/edit.svg";
import imgDelete from "src/assets/delete.svg";
import { ButtonAdd, ButtonControl, ButtonFloat, Container, H1, Img, Li, Ul, Wrapper } from "src/components/Main/FolderSelect.styled";
import { URLS } from "src/utils/getData.type";

interface IhandleModal {
  (e: React.MouseEvent): void;
}

function FolderSelect() {
  const [title, setTitle] = useState("전체");
  const { modal, dispatch } = useModal();

  const handleModal: IhandleModal = (e) => {
    const title = e.currentTarget.parentElement?.title ?? "";
    const type = e.currentTarget.textContent ?? "";
    dispatch({ title, type });
  };

  return (
    <>
      <FolderCategories setTitle={setTitle} handleModal={handleModal} />
      <FolderController title={title} handleModal={handleModal} />
      <FolderAddFloat handleModal={handleModal} />
      {modal}
    </>
  );
}

export default FolderSelect;

interface Pcategories {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  handleModal: IhandleModal;
}

function FolderCategories({ setTitle, handleModal }: Pcategories) {
  const categories = useData(URLS.FOLDER_CATEGORY);
  const [prevSelect, setPrevSelect] = useState<HTMLElement>();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    prevSelect?.classList.remove("active");

    const target = e.target as HTMLLIElement;

    setPrevSelect(target);

    target.classList.add("active");

    if (!target.textContent) return;
    setTitle(target.textContent);
  };

  return (
    <Container>
      <Ul>
        <Link to="/folder" onClick={handleClick}>
          <Li>전체</Li>
        </Link>
        {categories.data?.map((category) => (
          <Link to={`?folderId=${category.id}`} key={category.id} onClick={handleClick}>
            <Li>{category.name}</Li>
          </Link>
        ))}
      </Ul>
      <ButtonAdd onClick={handleModal}>
        폴더 추가
        <Img src={imgAdd} />
      </ButtonAdd>
    </Container>
  );
}

interface Pcontroller extends Pick<Pcategories, "handleModal"> {
  title: string;
}

function FolderController({ title, handleModal }: Pcontroller) {
  return (
    <Container>
      <H1>{title}</H1>
      <Wrapper title={title}>
        <ButtonControl onClick={handleModal}>
          <Img src={imgShare} />
          공유
        </ButtonControl>
        <ButtonControl onClick={handleModal}>
          <Img src={imgEdit} />
          이름 변경
        </ButtonControl>
        <ButtonControl onClick={handleModal}>
          <Img src={imgDelete} />
          삭제
        </ButtonControl>
      </Wrapper>
    </Container>
  );
}

interface PaddFloat extends Pick<Pcategories, "handleModal"> {}

function FolderAddFloat({ handleModal }: PaddFloat) {
  return (
    <ButtonFloat onClick={handleModal}>
      폴더 추가
      <Img src={imgAddWhite} />
    </ButtonFloat>
  );
}
