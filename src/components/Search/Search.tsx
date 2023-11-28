import {
  useState,
  ChangeEvent,
  useEffect,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";

import SearchBar from "./SearchBar";

interface Props {
  linksListData?: LinksData;
  onChange: Dispatch<SetStateAction<LinksData | undefined>>;
}

const Search = ({ linksListData, onChange }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    if (!linksListData || !linksListData.data) {
      onChange(undefined); // 빈 데이터 전달
      return;
    }

    const filteredData =
      value.trim() === ""
        ? linksListData.data // 검색어가 없을 때 전체 리스트를 유지
        : linksListData.data.filter((link) =>
            Object.values(link).some((val) =>
              val && typeof val === "string"
                ? val.toLowerCase().includes(value.toLowerCase())
                : false
            )
          );
    console.log(value, filteredData);
    onChange(filteredData.length > 0 ? { data: filteredData } : undefined);
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
};

export default Search;
