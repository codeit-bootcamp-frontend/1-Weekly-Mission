import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.css';
import './LandingPage.css';
import { titleImg } from '../../constants/landingImages';
import {
  ManageSection,
  SaveSection,
  SearchSection,
  ShareSection,
} from '../../components/landingSection/LandingSection';

function LandingPage() {
  return (
    <>
      <header>
        <div className="hero-header">
          <h1>
            <span className="font-gradation">세상의 모든 정보</span>를<br />
            쉽게 저장하고 관리해 보세요.
          </h1>
          <Link to="/sign-in">
            <div className="btn btn-add-link">링크 추가하기</div>
          </Link>
          <img src={titleImg} alt="웹사이트 사진" />
        </div>
      </header>
      <article>
        <SaveSection />
        <ManageSection />
        <ShareSection />
        <SearchSection />
      </article>
    </>
  );
}

export default LandingPage;
