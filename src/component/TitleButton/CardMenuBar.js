import { useState } from "react";
import { Link } from "react-router-dom";
import { CardButton } from "./CardButton.js";
import { MenuTitle } from "../TitleText/MenuTitle.js";
import addImg from "../../assets/add.svg";
import * as S from "./CardMenuBar.style.js";

export function CardMenuBar({ folders }) {
  const [title, setTitle] = useState("전체");

  return (
    <>
      <S.Container>
        <S.Ul>
          <Link to="/folder">
            <li>
              <S.Button>전체</S.Button>
            </li>
          </Link>
          {folders.map((folder) => (
            <CardButton folder={folder} key={folder.id} setTitle={setTitle} />
          ))}
        </S.Ul>
        <span>
          폴더 추가<img src={addImg} alt="폴더추가"></img>
        </span>
      </S.Container>
      <MenuTitle title={title} />
    </>
  );
}
