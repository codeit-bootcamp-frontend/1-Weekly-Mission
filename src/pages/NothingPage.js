import React from "react";
import NavSec from "../components/nav/NavSec";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";
import Footer from "../components/footer/Footer";
import styles from "./NothingPage.module.css";

export default function NothingPage() {
  return (
    <div className={styles.container}>
      <NavSec />
      <Header />
      <SearchBar />
      <p className={styles.text}>저장된 링크가 없습니다</p>
      <Footer />
    </div>
  );
}
