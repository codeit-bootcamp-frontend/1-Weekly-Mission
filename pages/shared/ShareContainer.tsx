import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./ShareContainerStyles";

import Layout from "@/components/layout/Layout";
import CardList from "@/components/card/CardList";
import Searchbar from "@/components/inputs/Searchbar";
import Hero from "@/components/hero/Hero";
import Loading from "@/components/Loading";

import { Owner } from "@/types/user";
import { SampleLinkData } from "@/types/folder";

import useFetch from "@/hooks/useFetch";
import { getFolder } from "@/common/api";

export default function Share() {
  const [folder, setFolder] = useState("");
  const [profile, setProfile] = useState<Owner>({
    id: 0,
    name: "",
    profileImageSource: "",
  });
  const [links, setLinks] = useState<SampleLinkData[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<SampleLinkData[]>([]);
  const [keyword, setKeyword] = useState("");
  const { isLoading, error, wrappedFunction: getFoldersAsyncFunc } = useFetch(getFolder);

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

  const handleFolderData = async () => {
    const { folder } = await getFoldersAsyncFunc();
    const { name: folderName, owner, links } = folder;

    setFolder(folderName);
    setProfile(owner);
    setLinks(links);
    setFilteredLinks(links);
  };

  useEffect(() => {
    handleFolderData();
  }, []);

  if (error) console.log(error);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <S.HeroContainer>
            <Hero folder={folder} profile={profile} />
          </S.HeroContainer>
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
