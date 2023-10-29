import styled from "styled-components";
import { ReactComponent as logoImg } from "../../images/logo.svg";
import DeviceSizes from "../../utils/DeviceSizes";

const LogoImage = styled(logoImg)`
  width: 13.3rem;
  height: 2.4rem;
  ${DeviceSizes.mobile} {
    width: 8.8rem;
    height: 1.6rem;
  }
`;

export default LogoImage;
