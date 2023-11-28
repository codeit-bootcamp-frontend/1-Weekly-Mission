import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import Layout from "../Layout/Layout";
import HomeImg from "src/assets/images/home-img.png";
import HomeImg1 from "src/assets/images/home-img1.png";
import HomeImg2 from "src/assets/images/home-img2.png";
import HomeImg3 from "src/assets/images/home-img3.png";
import HomeImg4 from "src/assets/images/home-img4.png";

function HomePage() {
  return (
    <Layout isSticky={true}>
      <div className={styles["home-header"]}>
        <h1 className="title">
          <span className={styles["important"]}>세상의 모든 정보</span>를 <br />
          쉽게 저장하고 관리해 보세요
        </h1>
        <button className={styles["link-button"]}>
          <Link to="/folder">링크 추가하기</Link>
        </button>
        <div className={styles["sample-img"]}>
          <img src={HomeImg} />
        </div>
      </div>

      <div className={styles["home-content"]}>
        <div className={styles["content"]}>
          <div className={styles["first-content"]}>
            <h3 className={styles["title"]}>
              <span className={styles["important"]}>원하는 링크</span>를 <br />{" "}
              저장하세요
            </h3>
            <p className={styles["description"]}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </p>
          </div>
          <div className={styles["img"]}>
            <img src={HomeImg1} />
          </div>
        </div>

        <div className={styles["content"]}>
          <div className={styles["img"]}>
            <img src={HomeImg2} />
          </div>
          <div className={styles["second-content"]}>
            <h3 className={styles["title"]}>
              링크를 폴더로
              <br /> <span className={styles["important"]}>관리</span>하세요
            </h3>
            <p className={styles["description"]}>
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
            </p>
          </div>
        </div>

        <div className={styles["content"]}>
          <div className={styles["third-content"]}>
            <h3 className={styles["title"]}>
              저장한 링크를
              <br />
              <span className={styles["important"]}>공유</span>해보세요
            </h3>
            <p className={styles["description"]}>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </p>
          </div>
          <div className={styles["img"]}>
            <img src={HomeImg3} />
          </div>
        </div>

        <div className={styles["content"]}>
          <div className={styles["img"]}>
            <img src={HomeImg4} />
          </div>
          <div className={styles["fourth-content"]}>
            <h3 className={styles["title"]}>
              저장한 링크를
              <br /> <span className={styles["important"]}>검색</span>해보세요
            </h3>
            <p className={styles["description"]}>
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
