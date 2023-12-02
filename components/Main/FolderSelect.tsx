import { useState } from "react";
import useModal from "@/hooks/useModal";
import useData from "@/hooks/useData";
import { ButtonAdd, ButtonControl, ButtonFloat, Container, H1, Li, Ul, Wrapper } from "@/components/Main/FolderSelect.styled";
import { URLS } from "@/utils/getData.type";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: number;
}

interface IhandleModal {
  (e: React.MouseEvent): void;
}

function FolderSelect({ id }: Props) {
  const [title, setTitle] = useState("전체");
  const { modal, dispatch } = useModal();

  const handleModal: IhandleModal = (e) => {
    const title = e.currentTarget.parentElement?.title ?? "";
    const type = e.currentTarget.textContent ?? "";
    dispatch({ title, type });
  };

  return (
    <>
      <FolderCategories id={id} setTitle={setTitle} handleModal={handleModal} />
      <FolderController title={title} handleModal={handleModal} />
      <FolderAddFloat handleModal={handleModal} />
      {modal}
    </>
  );
}

export default FolderSelect;

interface Pcategories {
  id: number;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  handleModal: IhandleModal;
}

function FolderCategories({ id, setTitle, handleModal }: Pcategories) {
  const categories = useData(URLS.FOLDER_CATEGORY, id);
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
        <Link href="/folder" onClick={handleClick}>
          <Li>전체</Li>
        </Link>
        {categories?.data?.map((category) => (
          <Link href={`?folderId=${category.id}`} key={category.id} onClick={handleClick}>
            <Li>{category.name}</Li>
          </Link>
        ))}
      </Ul>
      <ButtonAdd onClick={handleModal}>
        폴더 추가
        <Image width={16} height={16} src="/add.svg" alt="폴더에 추가하기" />
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
          <Image width={20} height={20} src="/share.svg" alt="폴더 공유하기" />
          공유
        </ButtonControl>
        <ButtonControl onClick={handleModal}>
          <Image width={20} height={20} src="/edit.svg" alt="폴더 이름 바꾸기" />
          이름 변경
        </ButtonControl>
        <ButtonControl onClick={handleModal}>
          <Image width={20} height={20} src="/delete.svg" alt="폴더 삭제하기" />
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
      <Image width={20} height={20} src="/addWhite.svg" alt="폴더에 추가하기" />
    </ButtonFloat>
  );
}
