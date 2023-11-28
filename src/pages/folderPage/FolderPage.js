import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Article from "../../ui/Article";
import Footer from "../../ui/Footer";
import AddLink from "../../components/addLink/AddLink";
import ModalBackground from "../../components/modal/ModalBackground";
import ModalListButton from "../../components/modal/ModalListButton";
import Modal from "../../components/modal/Modal";

const FolderPage = () => {
  const [data, setData] = useState();
  const [isAddLinkClicked, setIsAddLinkClicked] = useState(false);
  const [addLinkValue, setAddLinkValue] = useState("");
  function getData(data) {
    setData(data);
  }
  function handleAddLinkClick(e) {
    e.preventDefault();
    if (addLinkValue !== "") {
      setIsAddLinkClicked(!isAddLinkClicked);
    }
  }
  function handleModalListButton(e) {
    e.preventDefault();
  }

  return (
    <>
      <Nav />
      <header style={{ padding: "6rem 0 9rem 0" }}>
        <AddLink
          onClick={handleAddLinkClick}
          setAddLinkValue={setAddLinkValue}
        />
      </header>
      <Header getData={getData} />
      <Article />
      <Footer />
      {isAddLinkClicked ? (
        <ModalBackground>
          <Modal>
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
                    <ModalListButton onClick={(e) => handleModalListButton(e)}>
                      <b>{list.name}</b> &nbsp; {list.link.count}개 링크
                    </ModalListButton>
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
          </Modal>
        </ModalBackground>
      ) : null}
    </>
  );
};

export default FolderPage;
