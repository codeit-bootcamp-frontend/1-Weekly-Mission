import API from "@/service/api";

const Home = async () => {
  const data = await API.user.getUser();
  const title = data?.data?.[0].name;

  return (
    <>
      <div className="w- 500 h-500 bg-primary-light">{title}</div>
    </>
  );
};

export default Home;
