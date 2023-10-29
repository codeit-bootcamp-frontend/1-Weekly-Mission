import styled from "styled-components";
import colors from "../../style/colors";

const AddLinkInput = styled.input`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid ${colors.primary};

  background: ${colors.white};
`;

function AddLink() {
  return <AddLinkInput />;
}

export default AddLink;
