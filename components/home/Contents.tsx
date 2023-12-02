import styled, { css } from 'styled-components';
import { CONTENTS } from '@/constants/default';
import Image from 'next/image';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

interface Props {
  type: 'save' | 'folder' | 'share' | 'search';
}

function Contents({ type }: Props) {
  return (
    <Container $type={type}>
      <Title>
        {CONTENTS[type].title_pre}
        <Grd $type={type}>{CONTENTS[type].title_grd}</Grd>
        {CONTENTS[type].title_post}
      </Title>
      <Detail>{CONTENTS[type].detail}</Detail>
      <Img alt={CONTENTS[type].alt} src={CONTENTS[type].src} width={550} height={450} />
    </Container>
  );
}

export default Contents;

const saveGrd = css`
  background: linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const folderGrd = css`
  background: linear-gradient(277deg, #6fbaff 59.22%, #ffd88b 93.66%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const shareGrd = css`
  background: linear-gradient(99deg, #6d7ccd 19.76%, rgba(82, 136, 133, 0.22) 52.69%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const searchGrd = css`
  background: var(--fandom-k-gra-blue-to-pink, linear-gradient(271deg, #fe578f -9.84%, #68e8f9 107.18%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const rightImg = css`
  grid-template-columns: 291px 550px;
  grid-template-areas:
    '. img'
    'title img'
    'detail img'
    '. img';

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    grid-template-columns: 262px 384px;
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    grid-template: repeat(3, auto) / repeat(1, 1fr);
    grid-template-areas:
      'title'
      'img'
      'detail';
  }
`;

const leftImg = css`
  grid-template-columns: 550px 291px;
  grid-template-areas:
    'img .'
    'img title'
    'img detail'
    'img .';

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    grid-template-columns: 384px 262px;
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    grid-template: repeat(3, auto) / repeat(1, 1fr);
    grid-template-areas:
      'title'
      'img'
      'detail';
  }
`;

const Container = styled.section<{ $type: string }>`
  width: 998px;
  margin: 0 auto;

  display: grid;
  column-gap: 157px;
  row-gap: 10px;
  align-items: center;

  grid-template: repeat(4, auto) / repeat(2, 1fr);

  ${({ $type }) => {
    if ($type === 'save' || $type === 'share') return rightImg;
    else return leftImg;
  }}

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 697px;

    column-gap: 51px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
    padding: 0 32px;

    row-gap: 20px;
    column-gap: 0;
  }
`;

const Title = styled.h2`
  grid-area: title;
  font-size: 4.8rem;
  font-weight: 700;
  letter-spacing: -0.3px;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 2.4rem;
  }
`;

const Grd = styled.span<{ $type: string }>`
  font-size: 4.8rem;
  font-weight: 700;
  letter-spacing: -0.3px;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 2.4rem;
  }

  ${({ $type }) => {
    if ($type === 'save') return saveGrd;
    if ($type === 'folder') return folderGrd;
    if ($type === 'share') return shareGrd;
    if ($type === 'search') return searchGrd;
  }}
`;

const Detail = styled.div`
  width: 277px;

  grid-area: detail;

  color: var(--grey);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
  word-break: keep-all;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;

    font-size: 1.5rem;
  }
`;

const Img = styled(Image)`
  grid-area: img;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 384px;
    height: 315px;
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
    height: auto;
  }
`;
