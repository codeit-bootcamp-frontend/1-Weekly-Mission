import Image from "next/image";
import notFound from "@/src/assets/img/404.gif";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "7rem",
      }}
    >
      <Image
        src={notFound}
        alt="404 image"
        width={900}
        height={600}
        unoptimized
        style={{ position: "relative" }}
      />
      <Link
        href={"/"}
        style={{
          position: "absolute",
          bottom: "15%",
          fontSize: "1.8rem",
          padding: "1.6rem 2rem",
          border: "none",
          background: "var(--gra-purpleblue-to-skyblue)",
          color: "var(--grey-light)",
          borderRadius: "0.8rem",

          cursor: "pointer",
        }}
      >
        홈페이지로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;
