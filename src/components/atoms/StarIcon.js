import styled from "styled-components";
import { ReactComponent as starIcon } from "../../images/star.svg";

const StarIcon = styled(starIcon)`
  &:hover {
    path {
      fill: #6d6afe;
      stroke: white;
      fill-opacity: 1;
    }
  }
`;

export default StarIcon;
