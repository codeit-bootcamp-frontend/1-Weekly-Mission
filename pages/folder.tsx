import React, { useState } from "react";
import Nav from "@/folderPageComponents/Nav";
import Header from "@/folderPageComponents/Header";
import Article from "@/ui/Article";
import Footer from "@/ui/Footer";
import AddLink from "@/components/AddLink";
import axios from "@/api/axios";
import Head from "next/head";

export async function getStaticProps() {
  // const res = await axios.get(`/users/1`);
  const res = await axios.get(`/sample/user`);
  const userEmail: any = res?.data?.email;

  return {
    props: {
      userEmail,
    },
  };
}
//https://bootcamp-api.codeit.kr/api/users/1/folders
export default function FolderPage({ userEmail }: { userEmail: string }) {
  const [data, setData] = useState();
  const [isAddLinkClicked, setIsAddLinkClicked] = useState(false);
  const [addLinkValue, setAddLinkValue] = useState("");
  function getData(data: any) {
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
      {/* <Header getData={getData} /> */}
      <Article />
      <Footer />
      {/* {isAddLinkClicked ? (
        <div className="modal-background">
          <div className="modal">
            <b>폴더에 추가</b>
            <p>링크 주소: {addLinkValue}</p>
            <div style={{ position: "relative" }}>
              <img
                src="images/modalClose.svg"
                style={{
                  position: "absolute",
                  right: "-16.5rem",
                  top: "-10rem",
                }}
                onClick={handleAddLinkClick}
              />
            </div>
            <ul>
              {data?.map((list) => {
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
      ) : null} */}
    </>
  );
}
