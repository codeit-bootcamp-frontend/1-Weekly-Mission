import Image from "next/image";
import { IconLinkbrary } from "public/svgs";
import SERVER_API from "@/service/serverApi";
import Button from "./Button";

const Header = async () => {
  const user = await SERVER_API.user.getUser();
  const isLoggedIn = Boolean(user.state === "success");
  const userInfo = user?.data;

  return (
    <header className="h-63 w-full bg-primary-light py-12 tablet:h-95 tablet:py-20">
      <div className="mx-auto flex h-full max-w-[192rem] items-center justify-between px-32 pc:px-200">
        <IconLinkbrary />
        {isLoggedIn ? (
          <div className="flex items-center gap-6">
            <Image src={userInfo?.[0].image_source ?? ""} alt="프로필 사진" width={28} height={28} className="rounded-full" />
            <span className="hidden text-14 font-400 tablet:inline">{userInfo?.[0].email}</span>
          </div>
        ) : (
          <div className="h-40 w-80 tablet:h-54 tablet:w-128">
            <Button>로그인</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
