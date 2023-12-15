import { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";
import * as S from "./ShareContainerStyles";

import Layout from "@/components/layout/Layout";
import CardList from "@/components/card/CardList";
import Searchbar from "@/components/inputs/Searchbar";
import Hero from "@/components/hero/Hero";
import Loading from "@/components/Loading";

import { SampleLinkData, SharedFolderData } from "@/types/folder";

const TEST_FOLDER_ID = 40;

export default function Share() {
  // const [folder, setFolder] = useState<SharedFolderData>(initialValue);
  // const [profile, setProfile] = useState<Owner>({ id: 0, name: "", profileImageSource: "" });
  const [links, setLinks] = useState<SampleLinkData[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<SampleLinkData[]>([]);
  const [keyword, setKeyword] = useState("");

  const { data, isLoading, error } = useSWR<{ data: SharedFolderData[] }>(
    `/api/folders/${TEST_FOLDER_ID}`,
  );
  console.log(data?.data[0].name); // 삭제예정

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    const searchedLinks = checkMatchedAllLinks(e.target.value, links);
    setFilteredLinks(searchedLinks.length !== 0 ? searchedLinks : []);
  };

  const handleDeletekeyword = () => {
    setKeyword("");
    setFilteredLinks(links);
  };

  const checkMatchedAllLinks = (keyword: string, links: SampleLinkData[]) => {
    const filteredLinks = links.filter((link) => {
      return (
        (link.title && link.title.includes(keyword)) ||
        (link.description && link.description.includes(keyword)) ||
        (link.url && link.url.includes(keyword))
      );
    });
    return filteredLinks;
  };

  // useEffect(() => {
  //   if (data) {
  //     const { name: folderName, user_id } = data.data;
  //     // setFolder(data);
  //     // setProfile(owner);
  //     setLinks(links);
  //     setFilteredLinks(links);
  //   }
  // }, [data]);

  if (error) console.log(error);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <S.HeroContainer>{data && <Hero folder={data?.data[0]} />}</S.HeroContainer>
          <section>
            <S.Contents>
              <Searchbar
                keyword={keyword}
                handleOnChangeInput={handleOnChangeInput}
                handleDelete={handleDeletekeyword}
              />
              <CardList links={filteredLinks} />
            </S.Contents>
          </section>
        </Layout>
      )}
    </main>
  );
}
