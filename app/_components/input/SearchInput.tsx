import { IconSearch } from "public/svgs";

const SearchInput = () => {
  return (
    <form className="relative w-full">
      <input placeholder="링크를 검색해보세요." className="h-45 w-full rounded-md bg-gray-20 py-12 pl-45 pr-16 text-14 outline-none tablet:h-54 pc:text-16" />
      <div className="absolute left-18 top-1/2 -translate-y-1/2">
        <IconSearch />
      </div>
    </form>
  );
};

export default SearchInput;
