import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="section-title">
        <div className="section-title-wrap">
          <h2>
            <span>세상의 모든 정보</span>를<br />
            쉽게 저장하고
            <br className="tablet-mobile-hidden" /> 관리해보세요
          </h2>
          <Link href="/folder">링크 추가하기</Link>
          <div className="section-title-add-link"></div>
        </div>
      </section>
      <section className="section-article">
        <div className="section-article-wrap">
          {/* <!-- 첫번째 alticle --> */}
          <div className="section-article-introduce">
            <div className="section-article-introduce-first">
              <h3>
                <span>원하는 링크</span>를<br className="pc-hidden" />
                저장하세요
              </h3>
              {/* <!-- 모바일용 이미지 --> */}
              <div className="section-article-bg first-bg mobile-hidden">
                <Image fill src="/img/png/img1.png" alt="카드이미지" />
              </div>
              <p className="section-article-introduce-first-text">
                나중에 읽고 싶은 글, 다시 보고 싶은 영상,
                <br className="pc-hidden" />
                사고 싶은 옷, 기억하고 싶은 모든 것을
                <br className="pc-hidden" />한 공간에 저장하세요.
              </p>
            </div>
            <div className="section-article-bg first-bg pc-tablet-hidden">
              <Image fill src="/img/png/img1.png" alt="카드이미지" />
            </div>
          </div>
          {/* <!-- 두번째 alticle --> */}
          <div className="section-article-introduce section-article-introduce-reverse">
            <div className="section-article-introduce-second">
              <h3>
                링크를 폴더로
                <br className="pc-hidden" />
                <span>관리</span>하세요
              </h3>
              {/* <!-- 모바일용 이미지 --> */}
              <div className="section-article-bg second-bg mobile-hidden">
                <Image
                  fill
                  src="/img/png/img2.png"
                  alt="폴더이름 변경하기 이미지"
                />
              </div>
              <p className="section-article-introduce-second-text">
                나만의 폴더를 무제한으로 만들고
                <br className="pc-hidden" /> 다양하게 활용할 수 있습니다.
              </p>
            </div>
            <div className="section-article-bg second-bg pc-tablet-hidden">
              <Image
                fill
                src="/img/png/img2.png"
                alt="폴더이름 변경하기 이미지"
              />
            </div>
          </div>
          {/* <!-- 세번째 alticle --> */}
          <div className="section-article-introduce">
            <div className="section-article-introduce-third">
              <h3>
                저장한 링크를
                <br className="pc-hidden" />
                <span>공유</span>해 보세요
              </h3>
              {/* <!-- 모바일용 이미지 --> */}
              <div className="section-article-bg third-bg mobile-hidden">
                <Image
                  fill
                  src="/img/png/img3.png"
                  alt="폴더 공유하기 이미지"
                />
              </div>
              <p className="section-article-introduce-third-text">
                여러 링크를 폴더에 담고 공유할 수
                <br className="tablet-hidden" /> 있습니다.
                <br className="pc-hidden" />
                가족, 친구, 동료들에게 쉽고
                <br className="tablet-hidden" /> 빠르게 링크를
                <br className="pc-hidden" />
                공유해 보세요.
              </p>
            </div>
            <div className="section-article-bg third-bg pc-tablet-hidden">
              <Image fill src="/img/png/img3.png" alt="폴더 공유하기 이미지" />
            </div>
            {/* <!-- 모바일용 텍스트 --> */}
          </div>
          {/* <!-- 네번째 alticle --> */}
          <div className="section-article-introduce section-article-introduce-reverse">
            <div className="section-article-introduce-fourth">
              <h3>
                저장한 링크를
                <br className="pc-hidden" />
                <span>검색</span>해보세요
              </h3>
              {/* <!-- 모바일용 이미지 --> */}
              <div className="section-article-bg fourth-bg mobile-hidden">
                <Image fill src="/img/png/img4.png" alt="코드잇 검색 이미지" />
              </div>
              <p className="section-article-introduce-fourth-text">
                중요한 정보들을 검색으로 쉽게
                <br className="tablet-hidden" /> 찾아보세요
              </p>
            </div>
            <div className="section-article-bg fourth-bg pc-tablet-hidden">
              <Image fill src="/img/png/img4.png" alt="코드잇 검색 이미지" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
