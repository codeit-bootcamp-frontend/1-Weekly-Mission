import {
  useState,
  ChangeEvent,
  useEffect,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";

import SearchBar from "./SearchBar";
import { FolderLink } from "@/@types/link.types";

interface Props {
  linksListData?: FolderLink[];
  onChange: Dispatch<SetStateAction<FolderLink[] | undefined>>;
}

function Search({ linksListData, onChange }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    if (!linksListData) {
      onChange(undefined); // 빈 데이터 전달
      return;
    }

    const filteredData =
      value.trim() === ""
        ? linksListData // 검색어가 없을 때 전체 리스트를 유지
        : linksListData.filter((link) =>
            Object.values(link).some((val) =>
              val && typeof val === "string"
                ? val.toLowerCase().includes(value.toLowerCase())
                : false
            )
          );

    onChange(filteredData.length > 0 ? filteredData : undefined);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleResetValue = () => {
    setInputValue("");
    onChange(linksListData);
  };

  useEffect(() => {
    if (onChange) {
      onChange(linksListData);
      setInputValue("");
    }
  }, [linksListData, onChange]);
  return (
    <SearchBar
      inputValue={inputValue}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onClick={handleResetValue}
    />
  );
}

export default Search;
