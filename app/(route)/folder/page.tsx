"use client";

import SearchInput from "@/components/inputs/SearchInput";
import Banner from "./_components/Banner";
import Folders from "./_components/Folders";
import Links from "./_components/Links";

const Folder = () => {
  return (
    <>
      <Banner />
      <section className="mx-auto flex w-full max-w-[106rem] flex-col items-center px-32 pb-60 pt-20 pc:px-0">
        <SearchInput />
        <Folders />
        <Links />
      </section>
    </>
  );
};

export default Folder;
