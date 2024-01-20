import Image from "next/image";
import SERVER_API from "@/service/serverApi";

interface Props {
  params: {
    userId: string;
    folderId: string;
  };
}

const Shared = async ({ params }: Props) => {
  const userId = Number(params.userId);
  const folderId = Number(params.folderId);

  const user = await SERVER_API.user.getUserById(userId);
  const userInfo = user?.data?.[0];

  const folder = await SERVER_API.folder.getFolderById(folderId);
  const folderInfo = folder?.data?.[0];

  return (
    <section className="flex h-250 w-full flex-col items-center bg-primary-light pt-20">
      <Image src={userInfo?.image_source ?? ""} alt={"공유된 프로필 사진"} width={60} height={60} className="mb-12 h-60 w-60 rounded-full" />
      <span className="mb-20 text-16">{`@${userInfo?.name}`}</span>
      <span className="mb-20 text-40 font-600">{folderInfo?.name}</span>
    </section>
  );
};

export default Shared;
