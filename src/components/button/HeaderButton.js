import React, { useContext, useEffect } from "react";
import styles from "./HeaderButton.module.css";
import linkImage from "../../assets/images/link.svg";
import HeaderModal from "../../common/modal/HeaderModal";
import { useState } from "react";
import ObserverContext from "../../contexts/ObserverContext";

export default function HeaderButton() {
  const [openModal, setOpenModal] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const {
    headerRef: { headerRef, isHeaderVisible, setIsHeadervisible },
  } = useContext(ObserverContext);

  const {
    footerRef: { footerRef, isFooterVisible, setIsFooterVisible },
  } = useContext(ObserverContext);

  const options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const [IntersectionObserverEntry] = entries;
      console.log(IntersectionObserverEntry.isIntersecting);
      // header가 보이면서
      if (IntersectionObserverEntry.isIntersecting) {
        setIsHeadervisible(false);
      }
      //   hedaer가 안 보이면은 sticky를 보이게하자
      if (!IntersectionObserverEntry.isIntersecting) {
        setIsHeadervisible(true);
      }

      // if (isFooterVisible) {
      //   console.log("footer영역이 보인다");
      //   setIsHeadervisible(false);
      // }

      // // header가 안 보이면서 footer가 안보일때
      // if (!IntersectionObserverEntry.isIntersecting && isVisible2) {
      //   // sticky가 보인다
      //   setIsvisible(true);
      // }
      // // header가 보이면서 footer가보일떄
      // if (IntersectionObserverEntry.isIntersecting && !isVisible2) {
      //   setIsvisible(false);
      // }

      // if (!IntersectionObserverEntry.isIntersecting && !isVisible2) {
      //   setIsvisible(false);
      // }
      // // header가 보일때
    }, options);

    if (headerRef?.current) {
      observer.observe(headerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [isFooterVisible, isHeaderVisible]);

  return (
    <div ref={headerRef}>
      <div
        className={`${styles.container} ${
          isHeaderVisible ? styles.sticky : ""
        }`}
      >
        <div className={styles.button__container}>
          <div className={styles.input__container}>
            <img className={styles.image} src={linkImage} alt="링크이미지" />
            <input
              className={styles.input}
              placeholder="링크를 추가해보세요"
              onChange={handleInput}
            />
          </div>
          <button className={styles.add__button} onClick={handleModal}>
            추가하기
          </button>
          {openModal && (
            <HeaderModal setterFunc={setOpenModal} inputLink={inputText} />
          )}
        </div>
      </div>
    </div>
  );
}
