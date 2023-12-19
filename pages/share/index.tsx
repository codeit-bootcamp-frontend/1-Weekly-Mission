import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "@/lib/utils/axiosInstance";
import { Folders, FoldersData } from "@/lib/types/data";
import * as Styled from "@/style/SharePage.styled";

interface PropsSub {
  data: FoldersData;
}

const FolderList = ({ data }: PropsSub) => {
  return (
    <Link href={`/share/${data.id}`}>
      <Styled.Btn>{data.name}</Styled.Btn>
    </Link>
  );
};

const SharePage = () => {
  const [folderData, setFolderData] = useState<Folders>({
    data: [],
  });

  const fetchFolderList = async () => {
    const response = await axios.get("/users/1/folders");
    const { data: folderLink } = response.data;
    setFolderData((prev) => ({
      ...prev,
      data: folderLink,
    }));
  };

  useEffect(() => {
    fetchFolderList();
  }, []);

  return (
    <Styled.BtnBoxWrapper>
      <Styled.BtnBox>
        {folderData.data.map((data) => {
          return <FolderList key={data.id} data={data} />;
        })}
      </Styled.BtnBox>
    </Styled.BtnBoxWrapper>
  );
};

export default SharePage;
