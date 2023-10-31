import styled from 'styled-components';

function FolderCategoryButton({ category, onGetCategory }) {

  const handleGetCategoryClick = () => {
    onGetCategory({
      id: category.id,
      name: category.name
    });
  }

  return (
    <>
      <ButtonStyle onClick={handleGetCategoryClick}>{category.name}</ButtonStyle>
    </>
  );
}

export default FolderCategoryButton;

const ButtonStyle = styled.button`
  display: flex;
  padding: 0.6rem 1rem;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background-color: #fff;
  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
