import styled from 'styled-components';
import share_icon from '../../assets/svg/share.svg';
import pen_icon from '../../assets/svg/pen.svg';
import delete_icon from '../../assets/svg/trash.svg';
import IconControlButton from '../../styles/IconControlButton';

const ICONS = [
  {
    id: 1,
    iconImage: share_icon,
    name: '공유'
  },
  {
    id: 2,
    iconImage: pen_icon,
    name: '이름 변경'
  },
  {
    id: 3,
    iconImage: delete_icon,
    name: '삭제'
  }
]


function CategoryTitleContainer({ name }) {

  return (
    <CategoryTitleContainerStyle>
      <CategoryTitle>{name}</CategoryTitle>
      <FolderControlContainer>
        {ICONS.map((icon) => {
          return (
            <IconControlButton icon={icon} key={icon.id}/>
          )
        })}
      </FolderControlContainer>
    </CategoryTitleContainerStyle>
  );
}

export default CategoryTitleContainer;

const CategoryTitleContainerStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const CategoryTitle = styled.h4`
  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const FolderControlContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;
