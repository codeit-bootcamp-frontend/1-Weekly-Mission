import styled from 'styled-components';
import Header from '@/components/common/Header';
import Main from '@/components/home/Main';
import Contents from '@/components/home/Contents';
import Footer from '@/components/common/Footer';
import { DEVICE_SIZE } from '@/lib/styles/DeviceSize';

export default function Home() {
  return (
    <>
      <Header page="" />
      <Main />
      <Box>
        <Contents type="save" />
        <Contents type="folder" />
        <Contents type="share" />
        <Contents type="search" />
      </Box>
      <Footer />
    </>
  );
}

const Box = styled.div`
  width: 100%;
  padding: 120px 0;

  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 80px 0;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 40px 0;

    gap: 80px;
  }
`;
