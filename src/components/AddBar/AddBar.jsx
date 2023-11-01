import AddIMG from "assets/link.svg";
import * as Styled from "./StyledAddBar";

const AddBar = () => {
  return (
    <>
      <Styled.Form>
        <label htmlFor="add">
          <img src={AddIMG} alt="링크 이미지" />
        </label>
        <Styled.Input
          id="add"
          name="add"
          type="text"
          placeholder="링크를 추가해 보세요."
        />
        <Styled.Button>추가하기</Styled.Button>
      </Styled.Form>
    </>
  );
};

export default AddBar;
