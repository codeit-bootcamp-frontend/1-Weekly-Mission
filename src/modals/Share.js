import styles from './Share.module.css';
import shareKakao from '../assets/images/share_kakao.png';
import shareFacebook from '../assets/images/share_facebook.png';
import shareLink from '../assets/images/share_link.png';
import ModalHeader from '../components/ModalHeader/ModalHeader';

function Share({ children }) {
  const shareItems = [
    { img: shareKakao, sub: '카카오톡', onClick: '' },
    { img: shareFacebook, sub: '페이스북', onClick: '' },
    { img: shareLink, sub: '링크 복사', onClick: '' },
  ];

  return (
    <>
      <ModalHeader title="공유하기" subTitle={children}></ModalHeader>
      <div className={styles.body}>
        {shareItems.map((item) => {
          return (
            <div className={styles.link} key={item.sub}>
              <button href={item.href} onClick={item.onClick}>
                <img src={item.img} alt="" />
              </button>
              <p>{item.sub}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Share;
