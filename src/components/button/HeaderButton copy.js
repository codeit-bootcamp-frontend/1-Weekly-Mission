import React, { useEffect, useRef } from "react";
import styles from "./HeaderButton.module.css";
import linkImage from "../../assets/images/link.svg";
import HeaderModal from "../../common/modal/HeaderModal";
import { useState } from "react";

export default function HeaderButton({ observerRef }) {
  const [openModal, setOpenModal] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const ref = useRef(null);

  const [isVisible, setIsvisible] = useState(true);

  const options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      // console.log("대상이 관찰이 되었어요!", entries);
      const [IntersectionObserverEntry] = entries;
      // console.log(ref.current);
      console.log(
        IntersectionObserverEntry.isIntersecting,

        IntersectionObserverEntry.isVisible
      );
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, isVisible]);

  // console.log(isVisible);

  return (
    <div ref={ref} className={styles.container}>
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
  );
}
