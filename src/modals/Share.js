import styles from './Share.module.css';
import shareKakao from '../assets/images/share_kakao.png';
import shareFacebook from '../assets/images/share_facebook.png';
import shareLink from '../assets/images/share_link.png';

function Share() {
  const shareItems = [
    { img: shareKakao, sub: '카카오톡' },
    { img: shareFacebook, sub: '페이스북' },
    { img: shareLink, sub: '링크 복사' },
  ];

  return (
    <>
      <div className={styles.header}>
        <h2>폴더 공유</h2>
        <p>폴더명</p>
      </div>
      <div className={styles.body}>
        {shareItems.map((item) => {
          return (
            <div className={styles.link}>
              <img src={item.img} alt="" />
              <p>{item.sub}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Share;
