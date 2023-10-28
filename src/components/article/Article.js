import React, { useEffect, useRef, useState } from "react";
import styles from "./Article.module.css";
import titleImage from "../../assets/images/title.svg";

export default function Article() {
  const [isMobile, setIsMobile] = useState(false);
  const [title, setTitle] = useState("유용한글");

  const handleSize = () => {
    if (window.innerWidth > 768 && window.innerWidth < 1124) {
      setTitle("전체");
      setIsMobile(true);
    } else {
      setTitle("유용한글");
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 768 && window.innerWidth < 1124) {
      setTitle("전체");
    }

    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {!isMobile && (
        <img
          className={styles.images__container}
          src={titleImage}
          alt={title}
        ></img>
      )}
    </div>
  );
}
