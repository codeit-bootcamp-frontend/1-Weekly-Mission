import { Dispatch, ReactNode } from "react";
import Image from "next/image";
import { SetStateAction } from "jotai";

const SearchInput = ({
  children,
  value,
  setValue,
}: {
  children: ReactNode;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <Image width={16} height={16} src="/icons/search.svg" alt="" />
      {children}
      {value && (
        <button
          type="button"
          onClick={() => {
            setValue("");
          }}
        >
          <Image width={24} height={24} src="/icons/closeIcon.svg" alt="" />
        </button>
      )}
    </>
  );
};

export default SearchInput;
