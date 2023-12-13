import { useRouter } from "next/router";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import searchImg from "@/public/Search.svg";
import * as Styled from "./SearchBar.styled";

interface Props {
  id: string;
  q?: string;
}

const SearchBar = ({ id, q }: Props) => {
  const router = useRouter();
  const initialInputValue = q ? q : "";
  const [inputValue, setInputValue] = useState(initialInputValue);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    if (!id) {
      router.push(`/folder/search?q=${inputValue}`);
      return;
    }
    router.push(`/folder/${id}/search?q=${inputValue}`);
  };

  const handleCancelClick = () => {
    setInputValue("");
    if (!id) {
      router.push("/folder/search?q=");
      return;
    }
    router.push(`/folder/${id}/search?q=`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Styled.Form onSubmit={handleFormSubmit}>
      <label htmlFor="search">
        <Image
          src={searchImg}
          alt="검색 돋보기 이미지"
          width={16}
          height={16}
        />
      </label>
      <Styled.Input
        id="search"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="링크를 검색해 보세요."
      />
      {inputValue && <Styled.CloseBtn onClick={handleCancelClick} />}
    </Styled.Form>
  );
};

export default SearchBar;
