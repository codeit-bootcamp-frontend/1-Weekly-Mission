import { useState } from "react";
import { Link } from "react-router-dom";
import imgAdd from "../../assets/add.svg"
import imgAddWhite from "../../assets/addWhite.svg"
import imgShare from "../../assets/share.svg"
import imgEdit from "../../assets/edit.svg"
import imgDelete from "../../assets/delete.svg"
import S from "../styled";
import useData from "../../hooks/useReduce";

function FolderAddFloat() {
  return (
    <S.ButtonFloat>
      폴더 추가 <S.Img src={imgAddWhite} />
    </S.ButtonFloat>
  )
}

function FolderControler({ title }) {
  return (
    <S.Flex>
      <S.H1>{title}</S.H1>
      <S.DivControl title={title}>
        <S.ButtonControl>
          <S.Img src={imgShare} />공유
        </S.ButtonControl>
        <S.ButtonControl>
          <S.Img src={imgEdit} />이름 변경
        </S.ButtonControl>
        <S.ButtonControl>
          <S.Img src={imgDelete} />삭제
        </S.ButtonControl>
      </S.DivControl>
    </S.Flex>
  )
}

function FolderCategories({ setTitle }) {
  const [categories] = useData("FOLDER_CATEGORY")
  const [prevSelect, setPrevSelect] = useState(null);

  const handleClick = (e) => {
    prevSelect?.classList.remove("active");
    setPrevSelect(e.target);
    e.target.classList.add("active");
    setTitle(e.target.textContent);
  }

  return (
    <S.Flex>
      <S.Ul>
        <Link to="/folder" onClick={handleClick}>
          <S.Li>전체</S.Li>
        </Link>
        {categories?.map(category => (
          <Link to={`?folderId=${category.id}`} key={category.id} onClick={handleClick}>
            <S.Li>{category.name}</S.Li>
          </Link>
        ))}
      </S.Ul>
      <S.ButtonAdd>
        폴더 추가 <S.Img src={imgAdd} />
      </S.ButtonAdd>
    </S.Flex>
  )
}

function FolderSelect() {
  const [title, setTitle] = useState('전체');

  return (
    <>
      <FolderCategories setTitle={setTitle} />
      <FolderControler title={title} />
      <FolderAddFloat />
    </>

  )
}

export default FolderSelect