import { MouseEvent, RefObject, useState } from "react";
import eyeOff from "@/public/index/sign-eye-off.svg";
import eyeOn from "@/public/index/sign-eye-on.svg";

export default function usePwVisibility(input: RefObject<HTMLInputElement>) {
  const [toggleImg, setToggleImg] = useState<string>(eyeOff);

  const handleToggle = (e: MouseEvent) => {
    if (!input.current) return;
    input.current.type = input.current.type === "password" ? "text" : "password";
    setToggleImg((prev) => (prev === eyeOff ? eyeOn : eyeOff));
  };

  return { toggleImg, handleToggle };
}
