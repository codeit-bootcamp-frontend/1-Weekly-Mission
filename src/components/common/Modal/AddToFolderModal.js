import styled from 'styled-components';
import useGetLinkCount from 'hooks/useGetLinkCount';
import ModalFrame from './ModalFrame';
import BlueBtn from '../Button/BlueBtn';
import LinkCountItem from '../LinkCountItem';

function AddToFolderModal({ url, onClickClose }) {
  const linkCountData = useGetLinkCount(1);
  console.log(url);
  return (
    <ModalFrame onClickClose={onClickClose}>
      <Title>폴더에 추가</Title>
      <Url>{url}</Url>
      <Box>{linkCountData && linkCountData.map((data) => <LinkCountItem key={data.name} item={data} />)}</Box>
      <BlueBtn type="modal">추가하기</BlueBtn>
    </ModalFrame>
  );
}

export default AddToFolderModal;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
const Url = styled.div`
  margin-bottom: 24px;
  color: var(--gray-60);
  font-size: 1.4rem;
  line-height: 2.2rem; /* 157.143% */
`;
const Box = styled.div`
  width: 100%;
  height: 172px;
  overflow-y: scroll;
`;
