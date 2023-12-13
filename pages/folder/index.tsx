import React, { useState, useEffect } from "react";
import Nav from "@/pageComponents/folderPageComponents/Nav";
import Header from "@/pageComponents/folderPageComponents/Header";
import Article from "@/components/Article";
import Footer from "@/components/Footer";
import AddLink from "@/components/AddLink";
import axios from "@/libs/axios";
import Head from "next/head";
import Image from "next/image";
import s from "./index.module.css";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

export default function FolderPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState("");
  const [data, setData] = useState<Folders>();
  const [isAddLinkClicked, setIsAddLinkClicked] = useState(false);
  const [addLinkValue, setAddLinkValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        router.push("/signIn");
      } else {
        const fetchData = async () => {
          try {
            const headers = {
              Authorization: `Bearer ${accessToken}`,
            };
            const result = await axios.get(`/users`, { headers });
            const { email, image_source } = result?.data?.data[0];
            setUserEmail(email);
            setUserImage(image_source);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }
    }
  }, []);

  function getData(data: Folders): void {
    setData(data);
  }
  function handleAddLinkClick(
    e: MouseEvent<HTMLButtonElement | HTMLImageElement>
  ) {
    e.preventDefault();
    if (addLinkValue !== "") {
      setIsAddLinkClicked(!isAddLinkClicked);
    }
  }
  function handleModalListButton(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }
  function onLinkValueAdded(value: string) {
    setAddLinkValue(value);
  }

  return (
    <>
      <Head>
        <title>폴더 페이지</title>
      </Head>
      <Nav userEmail={userEmail} userImage={userImage} />
      <header className={s.header}>
        <AddLink
          onClick={handleAddLinkClick}
          onLinkValueAdded={onLinkValueAdded}
        />
      </header>
      <Header getData={getData} />
      <Article />
      <Footer />
      {isAddLinkClicked ? (
        <div className="modal-background">
          <div className="modal">
            <b>폴더에 추가</b>
            <p>링크 주소: {addLinkValue}</p>
            <div className={s.imgContainer}>
              <Image
                src="images/modalClose.svg"
                alt="닫기 버튼 이미지"
                className={s.img}
                width={30}
                height={30}
                onClick={handleAddLinkClick}
              />
            </div>
            <ul>
              {data &&
                data?.data?.map((list) => {
                  return (
                    <li className={s.list} key={list.id}>
                      <button
                        className="Modal-list-button"
                        onClick={(e) => handleModalListButton(e)}
                      >
                        <b>{list.name}</b> &nbsp; {list.link.count}개 링크
                      </button>
                    </li>
                  );
                })}
            </ul>
            <button className={s.button}>추가하기</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
