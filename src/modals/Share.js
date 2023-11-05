import styles from './Share.module.css';
import shareKakaoTalk from '../assets/images/share_kakao.png';
import shareFacebook from '../assets/images/share_facebook.png';
import shareLink from '../assets/images/share_link.png';
import ModalHeader from '../components/ModalHeader/ModalHeader';
import { useEffect } from 'react';

function Share({ children }) {
  const url = '';
  const userID = '';
  const folderID = '';

  const { Kakao } = window;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('315e98490c74ca221a6889ab7d1bbd56');
  }, [Kakao]);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'text',
      text: `Linkbrary`,
      link: {
        mobileWebUrl: `${url}/shared?user=${userID}&folder=${folderID}`,
        webUrl: `${url}/shared?user=${userID}&folder=${folderID}`,
      },
    });
  };

  const shareItems = [
    {
      img: shareKakaoTalk,
      sub: '카카오톡',
      onClick: shareKakao /* 도메인 등록이 필요하다고 함 */,
    },
    {
      img: shareFacebook,
      sub: '페이스북',
      onClick: () => {
        window.open(
          `http://www.facebook.com/sharer.php?u=${url}/shared?user=${userID}&folder=${folderID}`
        );
      },
    },
    {
      img: shareLink,
      sub: '링크 복사',
      onClick: () => {
        navigator.clipboard.writeText(
          `${url}/shared?user=${userID}&folder=${folderID}`
        );
      },
    },
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
