import styles from './Modal.module.css';
import { ReactNode, useEffect } from 'react';
import CopyToClipboard from '@/components/toasts/CopyToClipboard';
import ToastPortals from '@/components/toasts/ToastPortals';
import useToast from '@/hooks/useToast';
import {
  IconFacebookLarge,
  IconKakaotalkLarge,
  IconShareLink,
} from '@/public/svgs';

interface Props {
  folderName: string;
  folderId: number;
  userId: number;
}

function Share({ folderName, folderId, userId }: Props) {
  const { Kakao } = window;

  const realUrl = `https://linkbrary-gw-lim.vercel.app/shared?user=${userId}&folder=${folderId}`;

  const shareToKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'LINKBRARY',
        description: '링크 공유',
        imageUrl:
          'https://cdn.discordapp.com/attachments/1155018218507870219/1169891810647212083/linkbrary.png?ex=65570da7&is=654498a7&hm=001d723c49b5b5d454a486a81a920b54e62115649e6a0709297a6fdd20981b7e&',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '나도 보러 가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  const shareToFacebook = () => {
    window.open(
      `http://www.facebook.com/sharer/sharer.php?u=${realUrl}`,
      '페이스북 공유하기',
      'width=600,height=800,location=no,status=no,scrollbars=yes',
    );
  };

  const [showCopy, setShowCopy] = useToast(2000);

  const copyLinkClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(realUrl);
    } catch (err) {
      console.error(err);
    }
    setShowCopy();
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('');
  }, []);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>폴더 공유</h1>
        <p className={styles.description}>{folderName}</p>
      </div>
      <section className='mx-auto flex gap-32pxr'>
        <ShareBox icon={<IconKakaotalkLarge />} onClick={shareToKakao}>
          카카오톡
        </ShareBox>
        <ShareBox icon={<IconFacebookLarge />} onClick={shareToFacebook}>
          페이스북
        </ShareBox>
        <ShareBox icon={<IconShareLink />} onClick={copyLinkClipBoard}>
          링크 복사
        </ShareBox>
      </section>
      <ToastPortals>
        <CopyToClipboard show={showCopy} />
      </ToastPortals>
    </>
  );
}

export default Share;

interface ShareBoxProps {
  children: ReactNode;
  icon: JSX.Element;
  onClick: () => void;
}

function ShareBox({ children, icon, onClick }: ShareBoxProps) {
  return (
    <div className='flex h-70pxr flex-col items-center justify-center gap-10pxr'>
      <button onClick={onClick}>{icon}</button>
      <span className='text-13pxr font-normal leading-[1.5rem] text-gray-100'>
        {children}
      </span>
    </div>
  );
}
