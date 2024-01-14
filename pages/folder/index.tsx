import { queryClientProvider } from "@/apis/queryClientProvider";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Input from "@/components/input/Input";
import InputWrapper from "@/components/input/InputWrapper";
import SearchInput from "@/components/input/SearchInput";
import SearchInputIndicater from "@/components/input/SearchInputIndicater";
import useInput from "@/hooks/useInput";
import { dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Script from "next/script";
import styles from "./Folder.module.css";
import FolderNav from "./components/FolderNav";
import FolderAdd from "./components/FolderAdd";
import getFolderName from "@/util/getFolderName";
import { Folders, Link } from "@/types/server.type";
import fetcher from "@/apis/instance";
import { accessTokenAtom, folderIdAtom } from "@/jotai/atomStation";
import { useAtomValue } from "jotai";
import FolderEdit from "./components/FolderEdit";
import Binder from "@/components/Binder/Binder";
import AddLinkInput from "./components/AddLinkInput";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { queryClient } = await queryClientProvider(context);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

const Folder = () => {
  const accessToken = useAtomValue(accessTokenAtom);

  const addLink = useInput({ inputConfig: { id: "search", name: "search", placeholder: "링크를 추가해 보세요" } });
  const search = useInput({ inputConfig: { id: "search", name: "search", placeholder: "링크를 검색해 보세요" } });

  const { value: addLinkValue, setValue: setAddLinkValue } = addLink.input;
  const { value: searchValue, setValue: setSearchValue } = search.input;

  const folder_Id = useAtomValue(folderIdAtom);

  const { data: folderData } = useQuery({
    queryKey: ["Folders"],
    queryFn: () => fetcher<Folders[]>({ method: "get", url: "/folders", headers: { Authorization: accessToken } }),
  });

  const { data: LinkData } = useQuery({
    queryKey: folder_Id === 0 ? ["Links"] : ["LinksByFolderId", folder_Id],
    queryFn: () => {
      if (!folder_Id) {
        return fetcher<Link[]>({ method: "get", url: `/links`, headers: { Authorization: accessToken } });
      } else {
        return fetcher<Link[]>({
          method: "get",
          url: `/folders/${folder_Id}/links`,
          headers: { Authorization: accessToken },
        });
      }
    },
  });

  const folders = folderData?.data ?? [];
  const links = LinkData?.data ?? [];

  const folderName = getFolderName(folder_Id, folders);

  return (
    <>
      <Head>
        <title>Linkbrary : 내 폴더</title>
      </Head>

      <Script src="https://developers.kakao.com/sdk/js/kakao.js" />

      <Header position="static" />
      <div className={styles.addLink}>
        <InputWrapper {...addLink.wrapper} className={styles.addLinkWrapper}>
          <AddLinkInput value={addLinkValue} setValue={setAddLinkValue}>
            <Input {...addLink.input} />
          </AddLinkInput>
        </InputWrapper>
      </div>

      <section className={styles.root}>
        <InputWrapper {...search.wrapper} className={styles.searchWrapper}>
          <SearchInput value={searchValue} setValue={setSearchValue}>
            <Input {...search.input} />
          </SearchInput>
        </InputWrapper>

        <SearchInputIndicater searchValue={searchValue} />

        <div className={styles.toolbar}>
          <FolderNav />
          <FolderAdd />
        </div>

        <div className={styles.toolbar}>
          <h2 className={styles.folderName}>{folderName}</h2>
          {folder_Id !== 0 && <FolderEdit title={folderName} />}
        </div>

        <Binder cards={links} value={search.input.value} />
      </section>

      <Footer />
    </>
  );
};

export default Folder;
