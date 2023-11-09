import { useCallback, useState } from "react";
import Modal from "../Modal/Modal";
import shareIcon from "../../assets/share.svg";
import penIcon from "../../assets/pen.svg";
import deleteIcon from "../../assets/Delete.svg";
import * as S from "./TitleButton.style.js";

const Icons = [
  { name: "공유", image: shareIcon },
  { name: "이름 변경", image: penIcon },
  { name: "삭제", image: deleteIcon },
];

export function MenuTitleButton({title}) {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('')

  const handleButtonClick = useCallback((e,name) => {
    e.preventDefault;
    const iconName = Icons.filter((icon) => icon.name === name);
    setType(iconName[0].name);
    setVisible(true);
  },[])

  return (
    <>    
      <S.Container>
        {Icons.map((icon, index) => (
          <S.StyledButton key={index} onClick={(e) => handleButtonClick(e, icon.name)}>
            <img src={icon.image} alt={icon.name}></img>
            <p>{icon.name}</p>
          </S.StyledButton>
        ))}
      </S.Container>
      {visible && <Modal onClose={setVisible} type={type} label={title}/>}
    </>

  );
}
