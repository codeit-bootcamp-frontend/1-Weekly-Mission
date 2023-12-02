import styled from 'styled-components';
import Image from 'next/image';
import ModalFrame from './ModalFrame';
import Button from '../Button';
import LinkCountItem from '../LinkCountItem';
import useGetLinkCount from '@/hooks/useGetLinkCount';
import { SHARE_LIST } from '@/constants/default';
import { handleShareClick } from '@/lib/utils/shareLink';

interface Props {
  type: 'delete' | 'input' | 'share' | 'add';
  title: string;
  data?: string;
  button?: string;
  folderId?: number;
  onClickClose: () => void;
}

function Modal({ type, title, data = '', button = '', folderId, onClickClose }: Props) {
  const linkCountData = useGetLinkCount(1);

  return (
    <ModalFrame onClickClose={onClickClose}>
      <Title>{title}</Title>
      {data && <Data>{data}</Data>}
      {type === 'input' && <Input placeholder="내용 입력" />}
      {type === 'add' && <AddBox>{linkCountData && linkCountData.map((data) => <LinkCountItem key={data.name} item={data} />)}</AddBox>}
      {type === 'share' && (
        <ShareBox>
          {SHARE_LIST.map((item) => (
            <Item key={item.msg}>
              <Icon src={item.src} alt={item.alt} onClick={(event) => handleShareClick(event, folderId, data)} />
              <Text>{item.msg}</Text>
            </Item>
          ))}
        </ShareBox>
      )}
      {button && <Button type={type === 'delete' ? 'delete' : 'modal'}>{button}</Button>}
    </ModalFrame>
  );
}

export default Modal;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
const Data = styled.div`
  margin-bottom: 10px;
  color: var(--gray-60);
  font-size: 1.4rem;
  line-height: 2.2rem;
`;
const Input = styled.input`
  padding: 18px 15px;
  margin-top: 24px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--gray-20);
  background: white;
  font-size: 1.6rem;
  line-height: 2.4rem;
  outline: none;
  &::placeholder {
    color: var(--gray-60);
  }
  &:focus {
    border: 1px solid var(--primary-color);
  }
`;
const AddBox = styled.div`
  width: 100%;
  height: 172px;
  overflow-y: scroll;
`;
const ShareBox = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 32px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
const Icon = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;
const Text = styled.div`
  font-size: 1.3rem;
  line-height: 1.5rem;
`;
