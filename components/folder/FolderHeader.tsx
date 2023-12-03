import Image from 'next/image';
import linkImg from '../../asset/link.svg';
import * as FH from '../styled-component/FolderHeaderStyledComponent';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;

export default function FolderHeader() {
  return (
    <FH.FolderHeaderContainer>
      <FH.FolderHeaderWrapper>
        <FH.FolderHeaderDiv>
          <Div>
            <Image src="/link.svg" alt="linkImg" fill />
          </Div>

          <FH.FolderHeaderInput placeholder="링크를 추가해 보세요." />
        </FH.FolderHeaderDiv>
        <FH.FolderHeaderButton>추가하기</FH.FolderHeaderButton>
      </FH.FolderHeaderWrapper>
    </FH.FolderHeaderContainer>
  );
}
