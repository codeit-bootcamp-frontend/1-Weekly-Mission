import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "..";
import * as Styled from "./Sign.styled";

interface Props {
  msgText: string;
  linkText: string;
}

const SignHeader = ({ msgText, linkText }: Props) => {
  const router = useRouter();
  const location = router.pathname.split("/")[1]
    ? router.pathname.split("/")[1]
    : "/";

  return (
    <header>
      <Logo height="38" />
      <Styled.HeaderMsg>
        {msgText}
        <Link href={location === "signin" ? "/signup" : "/signin"}>
          <Styled.HeaderLink>{linkText}</Styled.HeaderLink>
        </Link>
      </Styled.HeaderMsg>
    </header>
  );
};

export default SignHeader;
