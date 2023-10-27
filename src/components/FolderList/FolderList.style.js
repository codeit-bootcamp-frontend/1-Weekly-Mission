import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { onMobile } from "styles/mediaQuery";
export const FolderListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style-type: none;
  padding-inline-start: 0;
  flex-wrap: wrap;
`;

export const FolderContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const Folder = styled(NavLink)`
  display: flex;
  padding: 0.8rem 1.2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--primary);
  background: ${({ selected }) => (selected ? `var(--primary)` : `var(--white)`)};
  color: ${({ selected }) => (selected ? `var(--white)` : `var(--black)`)};
  font-size: 1.6rem;
  line-height: 100%;
`;

export const AddFolderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  color: var(--primary);
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;

  .onMobile {
    display: none;
  }

  ${onMobile} {
    color: var(--white);
    padding: 0.8rem 2.4rem;
    border-radius: 2rem;
    border: 0.1rem solid var(--white);
    background: var(--primary);
    position: fixed;
    bottom: 10.1rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 9999;

    .notMobile {
      display: none;
    }

    .onMobile {
      display: block;
    }
  }
`;

export const CurrentFolderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;

  span {
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: -0.02rem;
  }
`;

export const OptionContainer = styled.div`
  display: ${({ selected }) => (selected ? `none` : `flex`)};
  align-items: flex-start;
  gap: 1.2rem;
  flex-wrap: wrap;

  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    span {
      font-size: 1.4rem;
      color: var(--gray60);
    }
  }
`;
