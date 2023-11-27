import * as S from './CopyToClipboard.style';

function CopyToClipboard({ show }) {
  return <S.Container $show={show}>링크가 복사되었습니다.</S.Container>;
}

export default CopyToClipboard;
