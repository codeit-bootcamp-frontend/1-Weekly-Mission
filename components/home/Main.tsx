import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/common/Button';
import screenshot from '@/public/assets/images/home.svg';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

function Main() {
  return (
    <Outer>
      <Container>
        <TextWrapper>
          <Span>
            <Grd>세상의 모든 정보</Grd>를
            <br />
          </Span>
          <Span>쉽게 저장하고 </Span>
          <Span>관리해 보세요</Span>
        </TextWrapper>
        <LinkFolder href="/folder">
          <Button type="linkAdd">링크 추가하기</Button>
        </LinkFolder>
        <Img alt="Linkbrary folder 페이지 스크린샷" src={screenshot} priority />
      </Container>
    </Outer>
  );
}

export default Main;

const Outer = styled.main`
  margin: 0 auto;
  padding-top: 70px;

  display: flex;
  justify-content: center;

  background-color: var(--bg);

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    padding-top: 28px;
  }
`;
const Container = styled.div`
  width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 698px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
    padding: 0 32px;

    gap: 24px;
  }
`;
const TextWrapper = styled.h1`
  width: 708px;
  text-align: center;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 472px;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 236px;
  }
`;
const Grd = styled.span`
  background: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 6.4rem;
  font-weight: 700;
  line-height: 80px;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 3.2rem;
    line-height: 42px;
  }
`;
const Span = styled.span`
  text-align: center;
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 80px;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 3.2rem;
    line-height: 42px;
  }
`;
const Img = styled(Image)`
  width: 100%;
  height: 590px;

  position: relative;

  overflow: hidden;
  object-fit: fill;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    height: 343px;
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    height: 100%;
  }
`;
const LinkFolder = styled(Link)`
  text-decoration: none;
`;
