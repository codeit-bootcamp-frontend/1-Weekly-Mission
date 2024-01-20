import Card from "@/components/Card";
import Header from "@/components/Header";
import SERVER_API from "@/service/serverApi";

const Home = async () => {
  const data = await SERVER_API.link.getLinks();
  console.log(data?.data?.[0]);

  return (
    <>
      <Header />
      <div className="h-500 w-500 bg-gray-60 p-30">
        <Card type="share" data={data?.data?.[0]} />
      </div>
    </>
  );
};

export default Home;
