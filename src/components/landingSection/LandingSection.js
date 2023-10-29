import React from 'react';
import {
  saveImg,
  manageImg,
  shareImg,
  searchImg,
} from '../../constants/landingImages';
import './LandingSection.css';

function SaveSection() {
  return (
    <section className="save">
      <h2>
        <span className="font-gradation">원하는 링크</span>를<br />
        저장하세요.
      </h2>
      <p>
        나중에 읽고 싶은 글, 다시 보고 싶은 영상,
        <br />
        사고 싶은 옷, 기억하고 싶은 모든 것을
        <br />한 공간에 저장하세요.
      </p>

      <img src={saveImg} alt="저장기능 설명 사진" />
    </section>
  );
}

function ManageSection() {
  return (
    <section className="manage">
      <h2>
        링크를 폴더로
        <br />
        <span className="font-gradation">관리</span>하세요
      </h2>
      <p>
        나만의 폴더를 무제한으로 만들고
        <br />
        다양하게 활용할 수 있습니다.
      </p>

      <img src={manageImg} alt="폴더관리기능 설명 사진" />
    </section>
  );
}

function ShareSection() {
  return (
    <section className="share">
      <h2>
        저장한 링크를 <br />
        <span className="font-gradation">공유</span>해 보세요.요
      </h2>
      <p>
        여러 링크를 폴더에 담고 공유할 수 있습니다. <br />
        가족, 친구, 동료들에게 쉽고 빠르게 링크를 <br />
        공유해 보세요.
      </p>
      <img src={shareImg} alt="공유기능 설명 사진" />
    </section>
  );
}

function SearchSection() {
  return (
    <section className="search">
      <h2>
        저장한 링크를
        <br />
        <span className="font-gradation">검색</span>해 보세요.
      </h2>
      <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
      <img src={searchImg} alt="검색기능 설명 이미지" />
    </section>
  );
}

export { SaveSection, ManageSection, ShareSection, SearchSection };
