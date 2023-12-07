import notFound from "@/public/images/404.jpg";
import Image from "next/image";

const NotFound = () => {
  return (
    <div>
      <Image src={notFound} fill sizes="100%" alt="404 페이지" />;
    </div>
  );
};

export default NotFound;
