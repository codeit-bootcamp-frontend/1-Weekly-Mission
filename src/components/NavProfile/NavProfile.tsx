import { useEffect, useState } from "react";
import { LinkButton } from "../LinkButton/LinkButton";
import style from "./NavProfile.module.css";
// import useAsync from "../../hooks/useAsync";
import { getUser } from "../../api/getUser";
// import ErrorPage from "../../pages/ErrorPage";

type GetUserResponse = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};
function NavProfile() {
  const [userInfo, setUserInfo] = useState<GetUserResponse | null>(null);
  // const { isLoading, error, wrappedFunction: getUserAsync } = useAsync<GetUserResponse>(getUser);

  useEffect(() => {
    const loadUser = async () => {
      const userInfo: GetUserResponse | null = await getUser({ id: 1 });
      setUserInfo(userInfo);
    };
    loadUser();
  }, []);

  // if (isLoading) return <span>loading</span>;
  // if (error) return <ErrorPage error={error} />;
  if (userInfo)
    return (
      <div className={style.profile}>
        <img
          className={style.profileImg}
          src={userInfo.image_source}
          alt="유저 프로필"
        />
        <div className={style.email}>{userInfo.email}</div>
      </div>
    );
  return <LinkButton url="/signin" text="로그인" type="blue" />;
}

export default NavProfile;
