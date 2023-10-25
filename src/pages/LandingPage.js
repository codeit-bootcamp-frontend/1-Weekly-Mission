import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { ReactComponent as Searchbar } from "../assets/images/searchbar.svg";
import ImageList from "../components/imageList/ImageList";
import useFetch from "../hooks/useFetch";
import ItemSkeleton from "../components/skeleton/ItemSkeleton";
import "./LandingPage.css";
import LocaleContext from "../contexts/LocaleContext";

export default function LandingPage() {
  const response = useFetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const [data, isLoading] = response;

  return (
    <div>
      <Searchbar />
      {!isLoading ? (
        <ImageList items={data} isLoading={isLoading} />
      ) : (
        <ItemSkeleton />
      )}
    </div>
  );
}
