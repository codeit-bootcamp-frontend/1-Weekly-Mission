import Layout from '@/components/Layout';
import Banner from './components/Banner';
import Card from './components/Card';

const CARDS_DATA = [
  {
    id: 1,
    layout: 'odd',
    title: (
      <p className='text-24pxr font-bold tracking-tight'>
        <span className='bg-gradient-to-r from-[#fe8a8a] to-[#a4ceff] bg-clip-text text-transparent'>
          원하는 링크
        </span>
        를 저장하세요
      </p>
    ),
    description:
      '나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.',
    imgSrc: '/images/link-examples.png',
    imgAlt: '저장한 링크들 예시',
  },
  {
    id: 2,
    layout: 'even',
    title: (
      <p className='text-24pxr font-bold tracking-tight'>
        링크를 폴더로{' '}
        <span className='bg-gradient-to-r from-[#6fbaff] to-[#ffd88b] bg-clip-text text-transparent'>
          관리
        </span>
        하세요
      </p>
    ),
    description: '나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.',
    imgSrc: '/images/link-folder.png',
    imgAlt: '링크를 관리할 수 있는 폴더 제작 창',
  },
  {
    id: 3,
    layout: 'odd',
    title: (
      <p className='text-24pxr font-bold tracking-tight'>
        저장한 링크를{' '}
        <span className='bg-gradient-to-r from-[#6d7ccd] to-[#528885] bg-clip-text text-transparent'>
          공유
        </span>
        해보세요
      </p>
    ),
    description:
      '여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.',
    imgSrc: '/images/folder-share.png',
    imgAlt: '링크 공유하기 창',
  },
  {
    id: 4,
    layout: 'even',
    title: (
      <p className='text-24pxr font-bold tracking-tight'>
        저장한 링크를{' '}
        <span className='bg-gradient-to-r from-[#fe578f] to-[#68e8f9] bg-clip-text text-transparent'>
          검색
        </span>
        해보세요
      </p>
    ),
    description: '중요한 정보들을 검색으로 쉽게 찾아보세요.',
    imgSrc: '/images/link-search.png',
    imgAlt: '링크 검색하기 창',
  },
];

function Home() {
  return (
    <Layout>
      <main>
        <Banner />
        <ul className='flex flex-col items-center gap-80pxr px-32pxr pb-80pxr pt-40pxr tablet:gap-100pxr tablet:px-0 tablet:pb-[17rem] tablet:pt-80pxr pc:gap-100pxr pc:px-0 pc:pb-[17rem] pc:pt-[12rem]'>
          {CARDS_DATA.map((card) => (
            <li key={card.id}>
              <Card data={card} />
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default Home;
