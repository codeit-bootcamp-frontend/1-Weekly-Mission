import useAsync from "../../Hooks/useAsync";
import { getUser } from "../../api";


import Footer from "../../components/Footer/Footer";

import Nav from "../../components/common/Nav";

import AddLink from "../../components/AddLink";
import Main from "../../components/Main";
import SearchBar from "../../components/SearchBar";
import FolderAndLink from "../../components/FolderAndLink";

function FolderPage() {
  const [data, isLoading, hasError] = useAsync(() => getUser(1));

  if (!data) return null;
  if (isLoading) return <div>로딩 중입니다.</div>;
  if (hasError) return <div>에러가 발생했습니다.</div>;

  const { email, image_source } = data.data[0];

  return (
    <>
      <Nav path="folder" email={email} profileImageSource={image_source} />
      <AddLink />
      <Main>
        <SearchBar />
        <FolderAndLink />
      </Main>
      <Footer />
    </>
  );
}

export default FolderPage;
