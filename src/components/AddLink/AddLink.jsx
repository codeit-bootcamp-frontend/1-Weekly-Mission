import styled from "styled-components";
import colors from "../../style/colors";
import linkImage from "../../assets/link.png"
const AddLinkFrame = styled.div`
  display: flex;
  padding: 60px 320px 90px 320px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: ${colors.background};
`;

const AddLinkInput = styled.input`
  display: flex;
  width: 800px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid ${colors.primary};

  background: ${colors.white};
  background-repeat: no-repeat;
  background-image: url(${linkImage});
  background-position: 15px 16px;
  padding-left: 45px;
`;


function AddLink() {
  return (
    <AddLinkFrame>
      {/* <IconImage/> */}
      <AddLinkInput type="text" placeholder="링크를 추가해 보세요." />
    </AddLinkFrame>
  );
}

export default AddLink;
