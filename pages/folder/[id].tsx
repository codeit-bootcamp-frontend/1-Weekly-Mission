import {Article,Header,} from "@/components";
import axios from "@/lib/axios";

export const getStaticPaths = async () => {
  const response = await axios.get("users/1/folders");
  const data = response.data.data;
  const paths = data.map((data: any) => ({
    params: { id: String(data.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const endPoint = `users/1/links${id ? `?folderId=${id}` : ""}`;
  const response = await axios.get(endPoint);
  const items = response.data;

  return {
    props: {
      items,
    },
  };
};

export default function FolderPage({ items }) {
  return (
    <>
      {!items && (
        <>
          <Header />
          <Article items={items} />
        </>
      )}
    </>
  );
}
