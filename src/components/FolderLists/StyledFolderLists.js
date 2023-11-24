// PC: 1200px 이상
// Tablet: 768px 이상 ~ 1199px 이하
// Mobile: 375px 이상 ~ 767px 이하
import styled from "styled-components";
import folderAddImg from "assets/folderAdd.svg";
import folderAddFloatingImg from "assets/folderAddFloating.svg";
import folderShareImg from "assets/share.svg";
import folderNameChangeImg from "assets/changeName.svg";
import folderDeleteImg from "assets/delete.svg";

const FOLDER_TOOL = {
  share: folderShareImg,
  change: folderNameChangeImg,
  delete: folderDeleteImg,
};

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const FolderBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const Btn = styled.button`
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--primary);
  background-color: ${({ selected }) =>
    selected ? `var(--primary)` : `var(--white)`};
  color: ${({ selected }) => (selected ? `var(--white)` : `var(--black)`)};
  white-space: nowrap;
`;

export const AddFolderBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 20px;

  @media (max-width: 767px) {
    position: fixed;
    left: 45%;
    bottom: 101px;
    z-index: 100;
    padding: 5px 24px;
    background-color: var(--primary);
    color: white;
  }
`;

export const AddFolderText = styled.span`
  color: var(--primary);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.3px;
  padding-top: 2px;

  @media (max-width: 767px) {
    color: var(--white);
  }
`;

export const AddFolderImg = styled.div`
  background-image: url(${folderAddImg});
  background-position: center;
  width: 16px;
  height: 16px;

  @media (max-width: 767px) {
    background-image: url(${folderAddFloatingImg});
  }
`;

export const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Title = styled.span`
  display: inline-block;
  width: 100%;
  word-break: keep-all;
  font-size: 2.5rem;
  font-weight: 600;
`;

export const ToolBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;

export const EditFolderBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const EditFolderText = styled.span`
  color: var(--gray60);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.3px;
  padding-top: 1.5px;
`;

export const EditFolderImg = styled.div`
  background-image: url(${({ $kind }) => FOLDER_TOOL[$kind]});
  background-position: center;
  width: 16px;
  height: 16px;
`;

export const NoFolderContainer = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  justify-content: center;

  @media (max-width: 1199px) {
    height: 400px;
  }
`;

export const NoFolderMsg = styled.div`
  font-size: 2rem;
  padding-top: 50px;
`;
