import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";
import * as S from "./ShareContainerStyles";

import Layout from "@/components/layout/Layout";
import CardList from "@/components/card/CardList";
import Searchbar from "@/components/inputs/Searchbar";
import Hero from "@/components/hero/Hero";
import Loading from "@/components/Loading";

import { LinkData } from "@/types/link";
import { checkMatchedAllLinks } from "@/common/utils/matchedKeyword";

export default function Share() {
  const router = useRouter();
  const folderId = router.query.id;

  const { data, isLoading } = useSWR(`/folders/${folderId}`);
  const { data: linksData } = useSWR(`/folders/${folderId}/links`);

  const links: LinkData[] = linksData ?? [];

  const [keyword, setKeyword] = useState("");
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>(links);

  /** @TODO 검색바 관련 로직 분리해보기(folder에서도 사용하므로) */
  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (linksData) {
      setKeyword(e.target.value);
      const searchedLinks = checkMatchedAllLinks(e.target.value, linksData);
      setFilteredLinks(searchedLinks.length !== 0 ? searchedLinks : []);
    }
  };

  const handleDeletekeyword = () => {
    setKeyword("");
    setFilteredLinks(links);
  };

  useEffect(() => {
    if (linksData) {
      setFilteredLinks(linksData);
    }
  }, [linksData]);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <S.HeroContainer>
            <Hero folder={data[0]} />
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
