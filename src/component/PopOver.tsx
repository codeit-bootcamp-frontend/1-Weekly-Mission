import * as Styled from "../style/PopOver";

function PopOver({ isOn }) {
  const handleOnClick = (e) => {
    e.stopPropagation();
  };

  if (isOn) {
    return (
      <Styled.Container>
        <Styled.Menu onClick={handleOnClick}>삭제하기</Styled.Menu>
        <Styled.Menu onClick={handleOnClick}>폴더에 추가</Styled.Menu>
      </Styled.Container>
    );
  }
}

export default PopOver;
