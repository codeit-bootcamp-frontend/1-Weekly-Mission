import React from "react";
import FolderNav from "../components/nav/FolderNav";
import Header from "../common/header/Header";
import SearchBar from "../common/searchBar/SearchBar";
import Footer from "../common/footer/Footer";
import styles from "./NothingPage.module.css";

export default function NothingPage() {
  return (
    <div className={styles.container}>
      <FolderNav />
      <Header />
      <SearchBar />
      <p className={styles.text}>저장된 링크가 없습니다</p>
      <Footer />
    </div>
  );
}
