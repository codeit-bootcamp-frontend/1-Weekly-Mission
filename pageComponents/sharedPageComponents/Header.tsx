import React, { useEffect, useState } from "react";
import Search from "@/components/Search";
import Cards from "@/pageComponents/sharedPageComponents/Cards";
import Image from "next/image";

interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

interface PropsType {
  profile: string;
  userName: string;
  folderName: string;
  fullData: Link[];
}

const Header = ({ profile, userName, folderName, fullData }: PropsType) => {
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
        <div className="hero-header" style={{ paddingBottom: "6rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <Image
              src={profile}
              alt="폴더프로파일"
              style={{ width: "5.5rem" }}
              width={50}
              height={50}
            />
            <p style={{ fontSize: "1.6rem" }}>{userName}</p>
            <p style={{ fontSize: "4rem", fontWeight: "600" }}>{folderName}</p>
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
