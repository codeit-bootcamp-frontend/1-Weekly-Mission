import Image from "next/image";
import styled from "styled-components";
import { SharedFolder } from "@/lib/Type";

interface FolderInfoProps {
  folder?: SharedFolder;
}

export default function FolderInfo({ folder }: FolderInfoProps) {
  return (
    <>
      <ProfileImg
        src={folder?.owner?.profileImageSource || "/images/profileImg.png"}
        width={60}
        height={60}
        alt="유저 프로필 이미지"
      />
      <OwnerName>@{folder?.owner?.name}</OwnerName>
      <FolderName>{folder?.name}</FolderName>
    </>
  );
}

const ProfileImg = styled(Image)`
  margin-bottom: 1.2rem;
  border-radius: 50%;
`;

const OwnerName = styled.div`
  margin-bottom: 2rem;

  color: black;
  font-size: 1.6rem;
  font-weight: 400;
`;

const FolderName = styled.div`
  color: black;
  font-family: Pretendard;
  font-size: 4rem;
  font-weight: 600;
`;
