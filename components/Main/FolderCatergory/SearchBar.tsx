import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { CloseImg, ContainerSearch, SearchImg, SerachInput } from "@/components/Main/FolderCatergory/SearchBar.styled";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = router.query;
    router.push({
      query: { ...query, q: value },
    });
  };

  const handleClick = () => {
    setValue("");
    input.current?.focus();
  };

  return (
    <ContainerSearch>
      <form onSubmit={handleSubmit}>
        <SerachInput ref={input} name="folderId" placeholder="링크를 검색해보세요." value={value} onChange={handleChange} />
      </form>
      <SearchImg src="/Search.svg" alt="검색창 표시 이미지" />
      {value && <CloseImg tabIndex={0} src="/close.svg" alt="검색어를 지웁니다." onClick={handleClick} />}
    </ContainerSearch>
  );
}
