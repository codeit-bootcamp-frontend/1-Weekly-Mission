import { MouseEvent, ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import getFolderByFolderID from "@/API/getFolderByFolderID";
import getLinksByFolderID from "@/API/getLinksByFolderID";
import BinderInfo from "@/components/BinderInfo/BinderInfo";
import getSpecificUserData from "@/API/getUser";
import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "@/styles/shared.module.css";
import useInputController from "@/hooks/useInputController";
import SearchBarResult from "@/components/SearchBarResult/SearchBarResult";
import Binder from "@/components/Binder/Binder";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const folder_ID = context.query["id"];

  // 이 폴더의 이름과 소유자의 id 확인
  const FolderData = await getFolderByFolderID(folder_ID);
  const {
    data: [{ user_id: user_ID, name: folderName }],
  } = FolderData;

  // 이 폴더 주인의 데이터 잡아오기
  const UserData = await getSpecificUserData(user_ID);
  const {
    data: [{ name: userName, image_source: profileImage }],
  } = UserData;

  // 이 폴더에 담겨있는 링크들을 확인
  const LinkData = await getLinksByFolderID(user_ID, folder_ID);
  const { data: links } = LinkData;

  try {
  } catch {
    return {
      notFound: true,
    };
  }
  return {
    props: { folder_ID, user_ID, folderName, links, userName, profileImage },
  };
};

const Shared: NextPageWithLayout = ({
  folderName,
  userName,
  profileImage,
  links,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const searchBox = useInputController({});

  const handleSearchBarDeleteIconClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchBox.setValues("");
  };

  return (
    <>
      <BinderInfo profileImage={profileImage} folderName={folderName} userName={userName} />
      <section className={styles.root}>
        <SearchBar
          value={searchBox.values}
          onChange={searchBox.handleChange}
          onClick={handleSearchBarDeleteIconClick}
        />
        {searchBox.values && <SearchBarResult value={searchBox.values} />}
        <Binder cards={links} shared={true} searchValue={searchBox.values} />
      </section>
    </>
  );
};

// (페이지 컴포넌트 이름).getLayout 으로 호출.
Shared.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header position="static" />
      <main>{page}</main>
      <Footer />
    </>
  );
};

export default Shared;
