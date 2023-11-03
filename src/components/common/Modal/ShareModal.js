import styled from 'styled-components';
import ModalFrame from './ModalFrame';
import { SHARE_LIST } from 'constants/default';
import { LOCAL_HOST } from 'constants/path';
import { shareKakaotalk, shareFacebook, copyLink } from 'utils/shareLink';

function ShareModal({ data = null, folderId, onClickClose }) {
  const SHARE_URL = `${LOCAL_HOST}/shared?user=1&folder=${folderId}`;

  function handleShareClick(event) {
    const target = event.target.closest('div').children[1];
    if (target.textContent === '카카오톡') shareKakaotalk(data, SHARE_URL);
    if (target.textContent === '페이스북') shareFacebook(SHARE_URL);
    if (target.textContent === '링크 복사') copyLink(SHARE_URL);
  }

  return (
    <ModalFrame onClickClose={onClickClose}>
      <Title>폴더 공유</Title>
      <FolderName>{data}</FolderName>
      <Box>
        {SHARE_LIST.map((item) => (
          <Item key={item.msg}>
            <Icon src={item.src} alt={item.alt} onClick={handleShareClick} />
            <Text>{item.msg}</Text>
          </Item>
        ))}
      </Box>
    </ModalFrame>
  );
}

export default ShareModal;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
const FolderName = styled.div`
  color: var(--gray-60);
  font-size: 1.4rem;
  line-height: 2.2rem; /* 157.143% */
`;
const Box = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 32px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
const Icon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
const Text = styled.div`
  font-size: 1.3rem;
  line-height: 1.5rem;
`;
