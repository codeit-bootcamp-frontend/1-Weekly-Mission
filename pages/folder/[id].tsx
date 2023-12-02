import { useRouter } from "next/router";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useLogin } from "@/lib/utils/LoginContext";
import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id: folderId } = context.params as Params;
//   let

//   return {
//     props: {

//     }
//   }
// };

const Folder = ({}) => {
  const { isLogin } = useLogin();

  return (
    <>
      <div></div>
    </>
  );
};

export default Folder;
