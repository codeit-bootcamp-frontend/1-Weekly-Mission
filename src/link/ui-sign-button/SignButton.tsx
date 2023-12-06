import { ROUTE } from "@/src/sharing/util";
import Link from "next/link";

interface SignButtonProps {
  currentPath: string;
}

const SignButton = ({ currentPath }: SignButtonProps) => {
  return (
    <div>
      <Link href={currentPath === "signin" ? ROUTE.회원가입 : ROUTE.로그인}>
        {currentPath === "signin" ? "로그인" : "회원가입"}
      </Link>
    </div>
  );
};

export default SignButton;
