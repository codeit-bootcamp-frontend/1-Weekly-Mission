import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FolderViewButton = styled(NavLink)`
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--linkbrary-primary-color, #6d6afe);
  background: #fff;
  font-size: 1.6rem;

  &:hover,
  &.active {
    color: #fff;
    background-color: var(--linkbrary-primary-color);
  }
`;

export default FolderViewButton;
