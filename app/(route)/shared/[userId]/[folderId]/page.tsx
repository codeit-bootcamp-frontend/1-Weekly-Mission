import Cards from "@/components/cards/Cards";
import SearchInput from "@/components/inputs/SearchInput";
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
        <Cards type="shared" data={links?.data} />
      </section>
    </>
  );
};

export default Shared;
