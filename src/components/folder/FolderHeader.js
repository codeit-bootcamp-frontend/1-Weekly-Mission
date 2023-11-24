import linkImg from './img/link.svg';
import * as FH from '../styled-component/FolderHeaderStyledCompoenet';

export default function FolderHeader() {
  return (
    <FH.FolderHeaderContainer>
      <FH.FolderHeaderWrapper>
        <FH.FolderHeaderDiv>
          <img
            src={linkImg}
            alt="linkImg"
            style={{ width: '20px', height: '20px' }}
          />
          <FH.FolderHeaderInput placeholder="링크를 추가해 보세요." />
        </FH.FolderHeaderDiv>
        <FH.FolderHeaderButton>추가하기</FH.FolderHeaderButton>
      </FH.FolderHeaderWrapper>
    </FH.FolderHeaderContainer>
  );
}
