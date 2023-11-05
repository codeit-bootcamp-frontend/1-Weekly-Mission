import styled from "styled-components";
import { RESPONSIBLE_MEDIA_QUERIES } from "../../constants/mediaQueries";
import { NavLink } from "react-router-dom";
import { ReactComponent as addIcon } from "../../images/add.svg";

export const TabBarWrap = styled.div`
  display: grid;
  align-items: start;
  justify-content: space-between;
  grid-template-columns: 1fr auto;

  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    display: contents;
  }
`;

export const TabLinkWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.8rem 1.2rem;

  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    grid-area: TabButtonWrap;
  }
`;

export const FolderTabLink = styled(NavLink)`
  display: block;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--linkbrary-primary-color, #6d6afe);
  background: #fff;
  font-size: 1.6rem;
  color: #000;
  &:hover,
  &.active {
    color: #fff;
    background-color: var(--linkbrary-primary-color);
  }
`;

export const FolderAddButton = styled.button`
  color: #6d6afe;
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  padding: 0.8rem 0;
  align-items: center;
  letter-spacing: -0.03rem;
  gap: 0.4rem;
  cursor: pointer;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    position: sticky;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.8rem 2.4rem;
    width: 12.9rem;
    border-radius: 2rem;
    color: #fff;
    border: 0.1rem solid var(--linkbrary-white, #fff);
    background: var(--linkbrary-primary-color, #6d6afe);
    z-index: 1;
    bottom: 10.1rem;
    grid-area: FolderAddButton;
  }
`;

export const AddIcon = styled(addIcon)`
  width: 1.6rem;
  height: 1.6rem;
  path {
    fill: #6d6afe;
  }
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    path {
      fill: #e7effb;
    }
  }
`;
