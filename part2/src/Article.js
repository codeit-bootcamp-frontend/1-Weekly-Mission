import React from "react";

const Article = () => {
  return (
    <>
      <article>
        <section>
          <h2 className="title">
            <span className="title-1-gradient background-clip-text">
              {" "}
              원하는 링크
            </span>
            를 저장하세요
          </h2>
          <p className="description">
            나중에 읽고 싶은 글, 다시 보고 싶은 영상,
            <br className="line-break-tablet-desktop" />
            사고 싶은 옷, 기억하고 싶은 모든 것을
            <br className="line-break-tablet-desktop" />한 공간에 저장하세요.
          </p>
          <img
            src="/images/image1.png"
            className="content-image"
            alt="링크의 내용이 담긴 카드들"
          />
        </section>
        <section>
          <h2 className="title">
            링크를 폴더로
            <span className="title-2-gradient background-clip-text">관리</span>
            하세요
          </h2>
          <p className="description">
            나만의 폴더를 무제한으로 만들고
            <br className="line-break-tablet-desktop" />
            다양하게 활용할 수 있습니다.
          </p>
          <img
            src="/images/image2.png"
            className="content-image"
            alt="폴더 이름 변경 기능"
          />
        </section>
        <section>
          <h2 className="title">
            저장한 링크를
            <span className="title-3-gradient background-clip-text">공유</span>
            해 보세요
          </h2>
          <p className="description">
            여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
            쉽고 빠르게 링크를 공유해 보세요.
          </p>
          <img
            src="/images/image3.png"
            className="content-image"
            alt="폴더 공유 기능"
          />
        </section>
        <section>
          <h2 className="title">
            저장한 링크를
            <span className="title-4-gradient background-clip-text">검색</span>
            해 보세요
          </h2>
          <p className="description">
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </p>
          <img
            src="/images/image4.png"
            className="content-image"
            alt="링크 검색 기능"
          />
        </section>
      </article>
    </>
  );
};

export default Article;
