import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FunctionBtn from "./FunctionBtn";
import iconShare from "../assets/img/icon-share.svg";
import iconPen from "../assets/img/icon-pen.svg";
import iconTrash from "../assets/img/icon-trash.svg";
import * as Styled from "../style/FolderList";

function FolderChip({ name, id, onClick, style }) {
  const handleOnClick = () => {
    onClick(id.slice(1), name);
  };

  return (
    <Link to={`/folder${id}`}>
      <Styled.FolderBtn onClick={handleOnClick} $active={style}>
        {name}
      </Styled.FolderBtn>
    </Link>
  );
}

function FolderList({ folders, params }) {
  const [active, setActive] = useState(params);
  const [name, setName] = useState("전체");

  function filterName(folders, params: string) {
    if (!params) {
      setName("전체");
      return;
    }
    const folder = folders.find((folder) => {
      return folder.id === Number(params);
    });
    setName(folder.name);
  }

  function handleClick(id: number) {
    setActive(id);
    filterName(folders, params);
  }

  useEffect(() => {
    handleClick(params);
  }, [params]);

  return (
    <>
      <Styled.FlexDiv>
        <Styled.FlexUl>
          <li>
            <FolderChip
              name={"전체"}
              id={""}
              onClick={handleClick}
              style={active === "" ? "blue" : ""}
            />
          </li>
          {folders.map((folder) => {
            const { id, name } = folder;

            return (
              <li key={folder.id}>
                <FolderChip
                  name={name}
                  id={"/" + id}
                  onClick={handleClick}
                  style={Number(active) === id ? "blue" : ""}
                />
              </li>
            );
          })}
        </Styled.FlexUl>
        <Styled.AddBtn>폴더 추가 +</Styled.AddBtn>
      </Styled.FlexDiv>

      <Styled.FlexDiv>
        <Styled.H1>{name}</Styled.H1>
        {active && (
          <Styled.OptionalUl>
            <FunctionBtn src={iconShare} alt="공유">
              공유
            </FunctionBtn>
            <FunctionBtn src={iconPen} alt="이름 변경">
              이름 변경
            </FunctionBtn>
            <FunctionBtn src={iconTrash} alt="삭제">
              삭제
            </FunctionBtn>
          </Styled.OptionalUl>
        )}
      </Styled.FlexDiv>
    </>
  );
}

export default FolderList;
