import Image from "next/image";
import { SampleFolderData } from "@/lib/types/data";
import * as Styled from "./FolderInfo.style";

interface Props {
  data: SampleFolderData;
}

const FolderInfo = ({ data }: Props) => {
  const { folderName, ownerName, ownerImage } = data;
  return (
    <>
      <Styled.OwnerWrapper>
        <Styled.OwnerImgBox>
          <Image
            fill
            src={ownerImage}
            alt="폴더 소유자 사진"
            style={{ objectFit: "cover" }}
          />
        </Styled.OwnerImgBox>
        <Styled.OwnerName>{`@${ownerName}`}</Styled.OwnerName>
      </Styled.OwnerWrapper>
      <Styled.FolderName>{folderName}</Styled.FolderName>
    </>
  );
};

export default FolderInfo;
