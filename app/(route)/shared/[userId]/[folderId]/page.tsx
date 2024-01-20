import Image from "next/image";
import Cards from "@/components/card/Cards";
import SERVER_API from "@/service/serverApi";
import Banner from "./_components/Banner";

interface Props {
  params: {
    userId: string;
    folderId: string;
  };
}

const Shared = async ({ params }: Props) => {
  const userId = Number(params.userId);
  const folderId = Number(params.folderId);

  const links = await SERVER_API.link.getLinksById(folderId);

  return (
    <>
      <Banner userId={userId} folderId={folderId} />
      <section className="mx-auto flex w-full max-w-[106rem] flex-col items-center px-32 pb-60 pt-20">
        <div className="h-40 w-full bg-gray-60"></div>
        <Cards type="shared" data={links?.data} />
      </section>
    </>
  );
};

export default Shared;
