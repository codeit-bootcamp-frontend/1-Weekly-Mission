import { ChangeEvent, useEffect, useState } from "react";

export default function useInput(defaultValue: string) {
  const [value, setValue] = useState(defaultValue);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, handleInputChange };
}
