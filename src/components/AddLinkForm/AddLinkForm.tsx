import { ChangeEvent, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './AddLinkForm.style';
import FooterRefContext from '@contexts/FooterRefContext';

interface Props {
  isScrolled: boolean;
}

function AddLinkForm({ isScrolled }: Props) {
  const [value, setValue] = useState('');
  const [showFooter, setShowFooter] = useState(false);
  const footerRef = useContext(FooterRefContext);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    });

    const currentRef = footerRef?.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [footerRef]);

  return (
    <S.FormContainer $isScrolled={isScrolled} $showFooter={showFooter}>
      <S.Form>
        <S.Input
          value={value}
          onChange={handleValueChange}
          placeholder='링크를 추가해 보세요'
        />
        <S.Img>
          <Image fill src='/assets/images/link.svg' alt='링크 아이콘' />
        </S.Img>
        <S.Button>추가하기</S.Button>
      </S.Form>
    </S.FormContainer>
  );
}

export default AddLinkForm;
