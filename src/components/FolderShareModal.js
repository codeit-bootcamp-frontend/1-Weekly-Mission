import { useRef, useEffect } from 'react';
import './css/Modal.css';
import xClose from './img/Xclose.svg';
import kakao from './img/kakao.svg';
import facebookImg from './img/facebookImg.svg';
import linkImg from './img/linkImg.svg';
import { useLocation } from 'react-router-dom';
const { Kakao } = window;

export default function FolderShareModal({ handleClick, title, id }) {
  const resultUrl = `window.location.href/${id}`;
  const BASEURL = 'localhost:3000';
  const location = useLocation();
  console.log(resultUrl);

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('512cd8a8ece57b97899c8cc612089c7d');
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Linkbrary',
        description: 'Share,Folder',
        imageUrl: 'https://i.ibb.co/XVh88Vs/image.jpg',
        link: {
          mobileWebUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '모바일 버튼',
          link: {
            mobileWebUrl: resultUrl,
          },
        },
      ],
    });
  };
  const onClickFacebook = () => {
    window.open(
      `http://www.facebook.com/sharer.php?u=${BASEURL}${location.pathname}/${id}`
    );
  };

  const back = useRef();
  const backClick = (e) => {
    if (e.target === back.current) handleClick();
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="modal-background" ref={back} onClick={backClick}>
      <div className="modal-wrapper">
        <div className="modal-header">폴더 공유</div>
        <div className="modal-link-url">{title}</div>
        <div className="modal-share-wrapper">
          <button
            className="modal-share-div"
            onClick={() => {
              shareKakao();
            }}
          >
            <img src={kakao} alt="카카오톡" />
            <div className="modal-share-name">카카오톡</div>
          </button>
          <button className="modal-share-div" onClick={onClickFacebook}>
            <img src={facebookImg} alt="페이스북" />
            <div className="modal-share-name">페이스북</div>
          </button>
          <button
            className="modal-share-div"
            onClick={() =>
              handleCopyClipBoard(`${BASEURL}${location.pathname}/${id}`)
            }
          >
            <img src={linkImg} alt="링크 복사" />
            <div className="modal-share-name">링크 복사</div>
          </button>
        </div>
        <img
          src={xClose}
          className="closeImg"
          alt="닫기 버튼"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
