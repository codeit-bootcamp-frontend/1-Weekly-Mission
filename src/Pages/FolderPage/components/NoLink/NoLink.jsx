import styled from "styled-components";
import { flexCenter } from "../../../../style/common";

const NoLinkFrame = styled.div`
  width: 1060px;
  height: 100px;
  padding: 41px 0px 35px 0px;
  ${flexCenter}
`;

function NoLink() {
  return <NoLinkFrame>저장된 링크가 없습니다.</NoLinkFrame>;
}

export default NoLink;
