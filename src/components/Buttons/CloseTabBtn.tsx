import styled from "styled-components";
import CloseTabBtnImg from "../../assets/image/CloseTabBtnBackground.svg";
import { IOnClick } from "../../utils/types/common.types";

const BtnStyle = styled.button`
  background: url(${CloseTabBtnImg});
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 5;
`;

function CloseTabBtn({ onClick }: IOnClick) {
  return <BtnStyle onClick={() => onClick && onClick(false)}></BtnStyle>;
}

export default CloseTabBtn;
