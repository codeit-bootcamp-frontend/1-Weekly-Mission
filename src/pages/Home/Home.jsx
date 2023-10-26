import * as S from './Home.style';
import Layout from 'components/Layout';
import Banner from 'pages/Home/components/Banner';
import Card from 'pages/Home/components/Card';
import LINKS_EXAMPLE from 'assets/images/link-examples.png';
import CREATE_FOLDER from 'assets/images/link-folder.png';
import SHARE_FOLDER from 'assets/images/folder-share.png';
import SEARCH_LINK from 'assets/images/link-search.png';

const CARDS_DATA = [
  {
    id: 1,
    layout: 'odd',
    title: (
      <p>
        <span>원하는 링크</span>를 저장하세요
      </p>
    ),
    description:
      '나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.',
    imgSrc: LINKS_EXAMPLE,
    imgAlt: '저장한 링크들 예시',
    gradient: 'linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%)',
  },
  {
    id: 2,
    layout: 'even',
    title: (
      <p>
        링크를 폴더로 <span>관리</span>하세요
      </p>
    ),
    description: '나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.',
    imgSrc: CREATE_FOLDER,
    imgAlt: '링크를 관리할 수 있는 폴더 제작 창',
    gradient: 'linear-gradient(277deg, #6fbaff 59.22%, #ffd88b 93.66%)',
  },
  {
    id: 3,
    layout: 'odd',
    title: (
      <p>
        저장한 링크를 <span>공유</span>해보세요
      </p>
    ),
    description:
      '여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.',
    imgSrc: SHARE_FOLDER,
    imgAlt: '링크 공유하기 창',
    gradient:
      'linear-gradient(99deg,#6d7ccd 19.76%,rgba(82, 136, 133, 0.22) 52.69%)',
  },
  {
    id: 4,
    layout: 'even',
    title: (
      <p>
        저장한 링크를 <span>검색</span>해보세요
      </p>
    ),
    description: '중요한 정보들을 검색으로 쉽게 찾아보세요.',
    imgSrc: SEARCH_LINK,
    imgAlt: '링크 검색하기 창',
    gradient: 'linear-gradient(271deg, #fe578f -9.84%, #68e8f9 107.18%)',
  },
];

function HomePage() {
  return (
    <Layout>
      <main>
        <Banner />
        <S.CardListContainer>
          {CARDS_DATA.map((card) => (
            <li key={card.id}>
              <Card data={card} />
            </li>
          ))}
        </S.CardListContainer>
      </main>
    </Layout>
  );
}

export default HomePage;
