import { ButtonFloat } from "@/components/Main/FolderSelect/FolderAddFloat.styled";
import { AddFloatProps } from "@/components/Main/FolderSelect/FolderSelect.type";
import Image from "next/image";

export default function FolderAddFloat({ handleModal }: AddFloatProps) {
  return (
    <ButtonFloat onClick={handleModal}>
      폴더 추가
      <Image width={20} height={20} src="/addWhite.svg" alt="폴더에 추가하기" />
    </ButtonFloat>
  );
}
