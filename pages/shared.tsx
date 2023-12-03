import {Header, Article} from "@/components";
import axios from "@/lib/axios";

export interface Link {
  id: number;
  image_source?: string;
  imageSource?: string;
  description: string;
  url: string;
  title: string;
  createdAt: string;
  created_at: string;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface Items {
  id?: number;
  name: string;
  owner: Owner;
  links: Link[];
}

export async function getStaticProps() {
  let data: Items;
  try {
    const result = await axios.get("sample/folder");
    data = result.data.folder;
  } catch (error) {
    throw new Error();
  }

  return {
    props: {
      data,
    },
  };
}

interface Props {
  data: Items;
}

export default function SharedPage({ data }: Props) {
  return (
    <>
      {data && (
        <>
          <Header items={data} />
          <Article items={data.links} />
        </>
      )}
    </>
  );
}
