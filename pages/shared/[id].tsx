import { queryClientProvider } from "@/apis/queryClientProvider";
import { FolderById, Link, UserById } from "@/types/server.type";
import { dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import fetcher from "@/apis/instance";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import useInput from "@/hooks/useInput";
import Input from "@/components/input/Input";
import SearchInput from "@/components/input/SearchInput";
import InputWrapper from "@/components/input/InputWrapper";
import SearchInputIndicater from "@/components/input/SearchInputIndicater";
import Binder from "@/components/Binder/Binder";

import Head from "next/head";
import styles from "./Shared.module.css";
import BinderInfo from "./components/BinderInfo/BinderInfo";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const folder_ID = context.query["id"] as string;

  const { queryClient } = await queryClientProvider(context);

  return {
    props: { folder_ID, dehydratedState: dehydrate(queryClient) },
  };
};

const Shared = ({ folder_ID }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // 필요한 데이터는 다른 곳에서 미리 받아오기
  const { folderName, userName, profileImage, links } = SharedFolder(folder_ID);

  // 인풋 컨트롤
  const search = useInput({ inputConfig: { id: "search", name: "search", placeholder: "링크를 검색해 보세요" } });
  const { value, setValue } = search.input;

  return (
    <>
      <Head>
        <title>Linkbrary : 공유된 폴더</title>
      </Head>
      <Header position="static" />
      <main>
        <BinderInfo profileImage={profileImage} folderName={folderName} userName={userName} />
        <section className={styles.root}>
          <InputWrapper {...search.wrapper} className={styles.searchWrapper}>
            <SearchInput value={value} setValue={setValue}>
              <Input {...search.input} />
            </SearchInput>
          </InputWrapper>
          <SearchInputIndicater searchValue={value} />
          <Binder cards={links} shared={true} value={value} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Shared;

function SharedFolder(folder_ID: string) {
  // 폴더 정보
  const { data: folderData } = useQuery({
    queryKey: ["FolderById", folder_ID],
    queryFn: () => fetcher<FolderById[]>({ method: "get", url: `/folders/${folder_ID}` }),
  });
  const [{ user_id: user_ID, name: folderName }] = folderData?.data ?? [];

  // 유저 정보
  const { data: userData } = useQuery({
    queryKey: ["userById", user_ID],
    queryFn: () => fetcher<UserById[]>({ method: "get", url: `/users/${user_ID}` }),
  });
  const [{ name: userName, image_source: profileImage }] = userData?.data ?? [];

  // 유저가 가진 폴더의 링크
  const { data: LinkData } = useQuery({
    queryKey: ["LinkById", folder_ID],
    queryFn: () => fetcher<Link[]>({ method: "get", url: `/folders/${folder_ID}/links` }),
  });
  const links = LinkData?.data ?? [];

  return { folderName, userName, profileImage, links };
}
