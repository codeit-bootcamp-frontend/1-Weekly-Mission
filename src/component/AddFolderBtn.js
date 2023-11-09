import iconAdd from "../assets/img/icon-add-gray.svg";
import * as Styled from "../style/AddFolderBtn";

function AddFolderBtn({ className }) {
  return (
    <Styled.Div>
      <Styled.Button className={className}>폴더추가</Styled.Button>
      <Styled.Img src={iconAdd} alt="추가하기" />
    </Styled.Div>
  );
}

export default AddFolderBtn;
