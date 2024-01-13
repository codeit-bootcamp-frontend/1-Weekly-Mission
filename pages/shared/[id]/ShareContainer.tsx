import { ChangeEvent, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import * as S from "./ShareContainerStyles";

import Layout from "@/components/layout/Layout";
import CardList from "@/components/card/CardList";
import Searchbar from "@/components/inputs/Searchbar";
import Hero from "@/components/hero/Hero";
import Loading from "@/components/Loading";

import { LinkData } from "@/types/folder";

// 링크 공유페이지는 로그인이 필요 없는 페이지임!!!
export default function Share() {
  const router = useRouter();
  const folderId = router.query.id;

  const { data, isLoading, error } = useSWR(`/folders/${folderId}`);
  const { data: linksData } = useSWR(`/folders/${folderId}/links`);

  const links: LinkData[] = linksData ?? [];

  const [keyword, setKeyword] = useState("");
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>(links);

  // console.log(linksData); // 삭제예정

  /** @TODO 검색바 관련 로직 분리해보기(folder에서도 사용하므로) */
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
