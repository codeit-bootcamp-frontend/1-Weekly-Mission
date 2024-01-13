/*ResponsiveImg 컴포넌트:
  화면 크기에 따라 img 크기도 바뀌게끔 반응형으로 이미지를 만들 때 쓸 컴포넌트. 
  이 컴포넌트를 쓰려면 상위 div 컨테이너의 width, height가 주어져야 함.

  src: 이미지 소스
  alt: 이미지 대체 텍스트
*/

import Image from "next/image";
import styles from "./ResponsiveImg.module.scss";

export default function ResponsiveImg({ src = "", alt = "" }) {
  return (
    <div className={styles["img-wrapper"]}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        priority={true}
        sizes="100vw"
      />
    </div>
  );
}
