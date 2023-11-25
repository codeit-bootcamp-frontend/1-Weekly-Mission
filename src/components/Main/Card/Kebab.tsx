import { useRef } from "react";
import { Container, PopOver } from "src/components/Main/Card/Kebab.styled";
import useModal from "src/hooks/useModal";
import useData from "src/hooks/useData";
import { URLS } from "src/utils/getData.type";
import kebabImg from "src/assets/kebab.svg";

interface Props {
  url: string;
}

function Kebab({ url }: Props) {
  const folderData = useData(URLS.FOLDER_CATEGORY);
  const { modal, dispatch } = useModal();
  const popOver = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    popOver.current?.classList.toggle("active");
    e.preventDefault();
  };
  const handleMouseLeave = () => {
    popOver.current?.classList.remove("active");
  };

  const handleModal = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const type = e.currentTarget.textContent ?? "";
    if (folderData?.path === URLS.FOLDER_CATEGORY) {
      dispatch({ type, title: url, data: folderData.data });
    }
  };

  const stop = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Container onClick={stop}>
      <button onClick={handleClick} onMouseLeave={handleMouseLeave}>
        <img src={kebabImg} alt="즐겨찾기에 추가하기" />
        <PopOver ref={popOver}>
          <p onClickCapture={handleModal}>삭제하기</p>
          <p onClick={handleModal}>폴더에 추가</p>
        </PopOver>
      </button>
      {modal}
    </Container>
  );
}

export default Kebab;
