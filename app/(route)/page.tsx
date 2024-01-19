import SERVER_API from "@/service/serverApi";

const Home = async () => {
  const data = await SERVER_API.user.getUser();
  console.log(data);
  return (
    <>
      <div className="h-500 w-500 bg-primary-light text-40">{data?.data?.[0].name ?? "NONE"} </div>
    </>
  );
};

export default Home;
