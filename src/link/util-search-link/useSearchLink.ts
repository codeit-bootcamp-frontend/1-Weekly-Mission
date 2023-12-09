import { Link } from "@/src/link/type";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";

export const useSearchLink = (links: Link[]) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };
  const handleCloseClick: MouseEventHandler<HTMLButtonElement> = () => {
    setSearchValue("");
  };

  const result = links.filter((link) => {
    const searchValueLowerCase = searchValue?.toLowerCase();
    const titleLowerCase = link?.title?.toLowerCase();
    const descriptionLowerCase = link?.description?.toLowerCase();
    const urlLowerCase = link?.url?.toLowerCase();

    return (
      titleLowerCase?.includes(searchValueLowerCase) ||
      descriptionLowerCase?.includes(searchValueLowerCase) ||
      urlLowerCase?.includes(searchValueLowerCase)
    );
  });

  return { searchValue, handleChange, handleCloseClick, result };
};
