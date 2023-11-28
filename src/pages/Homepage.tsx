import React from 'react';

import { useFetchUserProfileSample } from '../apis/fetch';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import HeroHeader from '../containers/Home/HeroHeader';
import Home from '../containers/Home/Home';
import * as S from './styles';

const HomePage = () => {
  const { data, isLoading } = useFetchUserProfileSample();
  const fixedBool = true;

  if (isLoading || !data) return null;
  return (
    <>
      <S.StyledHeader>
        <Navbar userData={data} fixed={fixedBool} />
        <HeroHeader />
      </S.StyledHeader>
      <Home />
      <Footer />
    </>
  );
};

export default HomePage;
