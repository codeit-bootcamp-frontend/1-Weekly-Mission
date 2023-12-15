import { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";
import * as S from "./ShareContainerStyles";

import Layout from "@/components/layout/Layout";
import CardList from "@/components/card/CardList";
import Searchbar from "@/components/inputs/Searchbar";
import Hero from "@/components/hero/Hero";
import Loading from "@/components/Loading";

import { LinkData, SharedFolderData } from "@/types/folder";

/** @TODO 폴더id 가져오기 */
const TEST_FOLDER_ID = 16;

export default function Share() {
  const [links, setLinks] = useState<LinkData[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>([]);
  const [keyword, setKeyword] = useState("");

  const { data, isLoading, error } = useSWR<{ data: SharedFolderData[] }>(
    `/api/folders/${TEST_FOLDER_ID}`,
  );
  const { data: linksData } = useSWR<{ data: LinkData[] }>(
    `/api/users/${data?.data[0].user_id}/links?folderId=${TEST_FOLDER_ID}`,
  );

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (linksData?.data) {
      setKeyword(e.target.value);
      const searchedLinks = checkMatchedAllLinks(e.target.value, linksData?.data);
      setFilteredLinks(searchedLinks.length !== 0 ? searchedLinks : []);
    }
  };

  const handleDeletekeyword = () => {
    setKeyword("");
    setFilteredLinks(links);
  };

  const checkMatchedAllLinks = (keyword: string, links: LinkData[]) => {
    const filteredLinks = links.filter((link) => {
      return (
        (link.title && link.title.includes(keyword)) ||
        (link.description && link.description.includes(keyword)) ||
        (link.url && link.url.includes(keyword))
      );
    });
    return filteredLinks;
  };

  useEffect(() => {
    if (linksData) {
      setLinks(linksData.data);
      setFilteredLinks(linksData.data);
    }
  }, [linksData]);

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
