import { IconLink } from "public/svgs";
import { Button } from "@/components/buttons";

const Banner = () => {
  return (
    <section className="h-115 w-full bg-primary-light px-32 pb-40 pt-25 tablet:h-220 tablet:pb-90 tablet:pt-60">
      <div className="relative mx-auto w-full max-w-[80rem]">
        <input
          placeholder="링크를 추가해 보세요."
          className="h-52 w-full rounded-md border border-solid border-primary py-8 pl-35 pr-100 text-14 outline-none tablet:h-70 tablet:py-16 tablet:pl-45 tablet:pr-120 tablet:text-16"
        />
        <div className="absolute left-10 top-18 tablet:left-20 tablet:top-26">
          <IconLink />
        </div>
        <div className="absolute right-10 top-8 h-36 w-80 tablet:right-20 tablet:top-14 tablet:h-44 tablet:w-90">
          <Button>추가하기</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
