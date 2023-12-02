import AddImg from "@/public/link.svg";
import * as Styled from "./StyledAddBar";

interface Props {
  isFixed: string;
}

const AddBar = ({ isFixed }: Props) => {
  return (
    <Styled.BackGround $isFixed={isFixed}>
      <Styled.Form>
        <label htmlFor="add">
          <AddImg alt="링크 이미지" />
        </label>
        <Styled.Input
          id="add"
          name="add"
          type="text"
          placeholder="링크를 추가해 보세요."
        />
        <Styled.Button>추가하기</Styled.Button>
      </Styled.Form>
    </Styled.BackGround>
  );
};

export default AddBar;
