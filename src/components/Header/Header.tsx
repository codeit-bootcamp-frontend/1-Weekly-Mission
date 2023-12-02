import styles from "./Header.module.css";
import logoImg from "/public/image/logo.svg";
import requestData from "../../services/api";
import { useEffect, useState } from "react";
import { IUserData } from "./types/Header.types";
import Image from "next/image";

function Header() {
  const [userData, setUserData] = useState<IUserData>();

  useEffect(() => {
    async function getUserDataResponse() {
      // 헤더에 표시되는 유저 이메일, 사진의 response data 받이오기
      const { data: userDataResponse }: { data: IUserData[] } =
        await requestData(null, "users/1", "GET");
      setUserData(userDataResponse[0]);
    }
    getUserDataResponse();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <Image
          className={styles.header_content__logoImg}
          src={logoImg}
          alt="logo"
        />
        <div className={styles.header_content__userDiv}>
          {userData && (
            <Image
              className={styles.header_content__userDiv__userImg}
              src={userData?.image_source}
              alt="user profile"
              width={28}
              height={28}
            />
          )}
          <h4 className={styles.header_content__userDiv__emailTxt}>
            {userData?.email}
          </h4>
        </div>
      </div>
    </header>
  );
}

export default Header;
