import shareIcon from "../../assets/share.svg";
import penIcon from "../../assets/pen.svg";
import deleteIcon from "../../assets/Delete.svg";
import * as S from "./TitleButton.style.js";

const Icons = [
  { name: "공유", image: shareIcon },
  { name: "이름 변경", image: penIcon },
  { name: "삭제", image: deleteIcon },
];

export function MenuTitleButton() {
  return (
    <S.Container>
      {Icons.map((icon, index) => (
        <S.StyledButton key={index}>
          <img src={icon.image} alt={icon.name}></img>
          <p>{icon.name}</p>
        </S.StyledButton>
      ))}
    </S.Container>
  );
}
