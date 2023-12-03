import React, { useState, useEffect } from "react";
import Nav from "@/folderPageComponents/Nav";
import Header from "@/folderPageComponents/Header";
import Article from "@/ui/Article";
import Footer from "@/ui/Footer";
import AddLink from "@/components/AddLink";
import axios from "@/api/axios";
import Head from "next/head";
import Image from "next/image";

interface Link {
  count: number;
}

interface SingleData {
  created_at: string;
  id: number;
  link: Link;
  name: string;
  user_id: number;
}

interface Data {
  data: SingleData[];
}

export default function FolderPage() {
  const [userEmail, setUserEmail] = useState("");
  const [data, setData] = useState<Data>();
  const [isAddLinkClicked, setIsAddLinkClicked] = useState(false);
  const [addLinkValue, setAddLinkValue] = useState("");
  async function getUserEmail() {
    const res = await axios.get(`/users/1`);
    setUserEmail(res?.data?.data[0]?.email);
  }
  useEffect(() => {
    getUserEmail();
  }, []);

  function getData(data: Data): void {
    setData(data);
  }
  function handleAddLinkClick(
    e: React.MouseEvent<HTMLButtonElement | HTMLImageElement>
  ) {
    e.preventDefault();
    if (addLinkValue !== "") {
      setIsAddLinkClicked(!isAddLinkClicked);
    }
  }
  function handleModalListButton(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }
  function handleAddLinkValue(value: string) {
    setAddLinkValue(value);
  }

  return (
    <>
      <Head>
        <title>폴더 페이지</title>
      </Head>
      <Nav userEmail={userEmail} />
      <header style={{ padding: "6rem 0 9rem 0" }}>
        <AddLink
          onClick={handleAddLinkClick}
          handleAddLinkValue={handleAddLinkValue}
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
            <div style={{ position: "relative" }}>
              <Image
                src="images/modalClose.svg"
                alt="닫기 버튼 이미지"
                style={{
                  position: "absolute",
                  right: "-16.5rem",
                  top: "-8rem",
                }}
                width={30}
                height={30}
                onClick={handleAddLinkClick}
              />
            </div>
            <ul>
              {data &&
                data?.data?.map((list) => {
                  return (
                    <li style={{ listStyle: "none" }} key={list.id}>
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
            <button
              style={{
                background:
                  "var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%))",
                borderRadius: "8px",
                width: "28rem",
                height: "2rem",
                padding: "1.6rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              추가하기
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
