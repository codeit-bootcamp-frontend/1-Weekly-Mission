import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import useDebounce from "@/hooks/useDebounce";
import debounce from "lodash/debounce";
import { ChangeEvent, MouseEvent, FormEvent } from "react";
import s from "./Search.module.css";

const Search = ({ getInputValue }: SearchProps) => {
  const [inputSearch, setInputSearch] = useState("");
  const mounted = useRef(false);
  const debouncedInputSearch = useDebounce(inputSearch, 300);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputSearch(e.target.value);
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      getInputValue(debouncedInputSearch);
    }
  }, [debouncedInputSearch]);

  // const updatedInput = useMemo(() => debounce(setInputSearch, 300), []);
  // function handleChange(e: ChangeEvent<HTMLInputElement>) {
  //   updatedInput(e.target.value);
  // }
  // useEffect(() => {
  //   if (!mounted.current) {
  //     mounted.current = true;
  //   } else {
  //     getInputValue(inputSearch);
  //   }
  // }, [inputSearch]);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setInputSearch("");
  }

  function handleSubmit(e: FormEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  return (
    <div className={s.main}>
      <div className={s.inputContainer} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={inputSearch}
          placeholder="링크를 검색해 보세요."
          className={s.input}
        ></input>

        {inputSearch !== "" && (
          <button onClick={handleClick} className={s.button}>
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
