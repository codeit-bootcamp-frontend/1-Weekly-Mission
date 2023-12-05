import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useDebounce from "@/hooks/useDebounce";
import { ChangeEvent, MouseEvent, FormEvent, KeyboardEvent } from "react";
import s from "./Search.module.css";

const Search = ({ getInputValue }: SearchProps) => {
  const [inputSearch, setInputSearch] = useState("");
  const mounted = useRef(false);
  const debouncedInputSearch = useDebounce(inputSearch, 300);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputSearch(e.target.value);
  }

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setInputSearch("");
  }

  function handleSubmit(e: FormEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      getInputValue(debouncedInputSearch);
    }
  }, [debouncedInputSearch]);

  return (
    <div className={s.main}>
      <div className={s.inputContainer} onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          value={inputSearch}
          placeholder="링크를 검색해 보세요."
          className={s.input}
        ></input>

        {inputSearch !== "" && (
          <button onClick={(e) => handleClick(e)} className={s.button}>
            <Image
              src="/images/close-button.svg"
              alt="닫기 버튼"
              width={50}
              height={50}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
