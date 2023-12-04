import styled from 'styled-components';
import { COLORS } from './palettes';

export const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0 6rem 0;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background: ${COLORS.BACKGROUND};
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ProfileName = styled.span`
  color: ${COLORS.BLACK};

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const Profile = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ProfileImage = styled.div`
  border: 1px solid #000;
  width: 6rem;
  height: 6rem;
`

export const FolderName = styled.div`
  color: ${COLORS.BLACK};
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Linkbrary/h1-semibold */
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CardSection = styled.div`
  border: 1px solid #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
`;

export const CardSectionContainer = styled.div`
  border: 1px solid #000;
  width: 106rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;