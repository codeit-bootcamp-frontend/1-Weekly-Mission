import ShareNav from "../components/nav/ShareNav";
import Header from "../common/header/Header";
import Landing from "../components/landing/Landing";
import Footer from "../common/footer/Footer";
import SearchBar from "../common/searchBar/SearchBar";
import Profile from "../common/profile/Profile";
import useFetch from "../hooks/useFetch";

import React from "react";
import { useQueryClient } from "react-query";

export default function SharedPage() {
  const queryClient = useQueryClient();
  console.log(queryClient);
  // 사용하려는 쿼리 식별자를 전달하여 캐시된 데이터를 가져옵니다.

  // const response = useFetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  // const [data, isLoading] = response;

  // return (
  //   <div>
  //     <ShareNav />
  //     <Header data={data} isLoading={isLoading} />
  //     <SearchBar />
  //     <Landing data={data} isLoading={isLoading} />
  //     <Footer />
  //   </div>
  // );
}
