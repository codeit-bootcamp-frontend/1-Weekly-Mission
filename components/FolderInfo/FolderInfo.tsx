import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "@/lib/utils/axiosInstance";
import * as Styled from "./FolderInfo.style";

interface Props {
  folderName: string;
}

const FolderInfo = ({ folderName }: Props) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    profile: "",
  });

  const fetchUserData = async () => {
    const response = await axios.get("/users/1");
    const {
      data: [{ name, image_source }],
    } = response.data;
    setUserInfo((prev) => ({
      ...prev,
      name: name,
      profile: image_source,
    }));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <Styled.OwnerWrapper>
        <Styled.OwnerImgBox>
          <Styled.OwnerImg src={userInfo.profile} alt="폴더 소유자 사진" fill />
        </Styled.OwnerImgBox>
        <Styled.OwnerName>{`@${userInfo.name}`}</Styled.OwnerName>
      </Styled.OwnerWrapper>
      <Styled.FolderName>{folderName}</Styled.FolderName>
    </>
  );
};

export default FolderInfo;
