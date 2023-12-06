import Image from "next/image";

interface SocialSignProps {
  currentPath: string;
}

const SocialSign = ({ currentPath }: SocialSignProps) => {
  return (
    <div>
      <span>
        {currentPath === "signin" ? "소셜 로그인" : "다른 방식으로 가입하기"}
      </span>
      <div>
        <a>
          <Image
            src="/images/google.png"
            alt="구글 이미지"
            width={22}
            height={22}
          />
          <Image
            src="/images/kakao.svg"
            alt="카카오톡 이미지"
            width={22}
            height={22}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialSign;
