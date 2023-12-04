import React, { useEffect, useState } from "react";
import Search from "@/components/Search";
import Cards from "@/pageComponents/sharedPageComponents/Cards";
import Image from "next/image";
import s from "./Header.module.css";

const Header = ({
  profile,
  userName,
  folderName,
  fullData,
}: SharedPageHeaderProps) => {
  const [inputValue, setInputValue] = useState("");
  function getInputValue(v: string): void {
    setInputValue(v);
  }

  const searchedData: Link[] = fullData?.filter((data: Link) => {
    if (
      data.url.includes(inputValue) ||
      data.title.includes(inputValue) ||
      data.description.includes(inputValue)
    ) {
      return data;
    }
  });

  return (
    <>
      <header>
        <div className={s.heroHeader}>
          <div className={s.imgContainer}>
            <Image
              src={profile}
              alt="폴더프로파일"
              className={s.img}
              width={50}
              height={50}
            />
            <p className={s.p1}>{userName}</p>
            <p className={s.p2}>{folderName}</p>
          </div>
        </div>
      </header>
      <Search getInputValue={getInputValue} />
      {searchedData && inputValue !== "" && <Cards fullData={searchedData} />}
      {fullData && inputValue === "" && <Cards fullData={fullData} />}
    </>
  );
};

export default Header;
