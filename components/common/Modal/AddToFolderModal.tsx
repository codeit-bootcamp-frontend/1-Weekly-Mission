import styled from 'styled-components';
import useGetLinkCount from '@/hooks/useGetLinkCount';
import ModalFrame from './ModalFrame';
import Button from '../Button';
import LinkCountItem from '../LinkCountItem';

interface Props {
  url: string;
  onClickClose: () => void;
}

function AddToFolderModal({ url, onClickClose }: Props) {
  const linkCountData = useGetLinkCount(1);

  return (
    <ModalFrame onClickClose={onClickClose}>
      <Title>폴더에 추가</Title>
      <Url>{url}</Url>
      <Box>{linkCountData && linkCountData.map((data) => <LinkCountItem key={data.name} item={data} />)}</Box>
      <Button type="modal">추가하기</Button>
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
  line-height: 2.2rem;
`;
const Box = styled.div`
  width: 100%;
  height: 172px;
  overflow-y: scroll;
`;
