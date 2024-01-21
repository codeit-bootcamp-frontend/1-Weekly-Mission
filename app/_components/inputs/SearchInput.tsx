import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconSearch } from "public/svgs";
import { ChangeEvent, useRef } from "react";
import { createQueryString } from "@/utils/handleQueryString";

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const timer = useRef<NodeJS.Timeout>();

  const setKeyword = (keyword: string) => {
    const query = createQueryString("keyword", keyword, params);
    router.push(`${pathname}?${query}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => setKeyword(newValue), 200);
  };

  return (
    <div className="relative w-full">
      <input
        onChange={handleChange}
        placeholder="링크를 검색해보세요."
        className="h-45 w-full rounded-md bg-gray-20 py-12 pl-45 pr-16 text-14 outline-none tablet:h-54 pc:text-16"
      />
      <div className="absolute left-18 top-1/2 -translate-y-1/2">
        <IconSearch />
      </div>
    </div>
  );
};

export default SearchInput;
