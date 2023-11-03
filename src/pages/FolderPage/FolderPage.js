import Layout from "commons/components/Layout/Layout";
import { SearchBar } from "commons/components/index";
import { LinkAddBar } from "./components/index";
import "./FolderPage.css";
import FolderViewer from "./components/FolderViewer/FolderViewer";
import { UserContext } from "contexts";
import { useState } from "react";

//모바일 환경에서 보이는 버튼
function MobileFolderButton() {
  return <button className="mobild-float-button">폴더 추가+</button>;
}

//
function FolderPage() {
  // isModal을 전역변수로 선언해서..
  // 각 하위 컴포넌트에서 버튼 누르면 useState 로 각 모델 키면
  // 전역변수 isModal 값 true로 만들고 disableScroll, classList.add 다 쓰기

  //아니시발 그냥 background를 windowLocation 받아와서 해볼까??
  return (
    <Layout isSticky={false}>
      <MobileFolderButton />
      <LinkAddBar />
      <SearchBar />
      <FolderViewer />
    </Layout>
  );
}

export default FolderPage;
