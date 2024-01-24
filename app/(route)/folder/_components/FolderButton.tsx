"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { createQueryString, removeQueryString } from "@/utils/handleQueryString";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  folderId?: number;
  selected: boolean;
}

const FolderButton = ({ children, folderId, selected }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const handleClick = () => {
    if (!folderId) {
      const query = removeQueryString("folderId", params);
      router.push(`${pathname}?${query}`);
      return;
    }

    const query = createQueryString("folderId", folderId, params);
    router.push(`${pathname}?${query}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`min-w-30 shrink-0 break-keep rounded-sm border border-solid border-primary px-10 py-6 text-14 tablet:px-12 tablet:py-8 tablet:text-16 ${selected ? "bg-primary text-white" : ""}`}
    >
      {children}
    </button>
  );
};

export default FolderButton;
