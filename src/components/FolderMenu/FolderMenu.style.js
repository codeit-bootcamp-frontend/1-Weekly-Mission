import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const FolderContainer = styled.div`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
  
export const FolderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FolderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Folder = styled.li`
  border-radius: 5px;
  border: 0.1rem solid ${COLORS.PRIMARY};

  display: flex;
  align-items: center;
  padding: 0.8rem 1.2rem;

  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AddFolderButton = styled.span`
  color: #6D6AFE;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const AddFolderIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export const FolderHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FolderName = styled.h3`
  color: #000;

  /* Linkbrary/h3-semibold */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const FolderOptionList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`;

export const FolderOption = styled.li`

  display: flex;
  gap: 0.4rem;
  align-items: center;

  color: var(--linkbrary-gray-60, #9FA6B2);

  /* Linkbrary/body2-semibold */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`; 

export const FolderOptionIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;