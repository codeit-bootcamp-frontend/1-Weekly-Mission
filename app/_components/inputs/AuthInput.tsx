import { IconEyeOff, IconEyeOn } from "public/svgs";
import { ReactNode, useState } from "react";
import { FieldValues, UseControllerProps, useController } from "react-hook-form";

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  children: ReactNode;
  placeholder?: string;
  type?: string;
}

const Input = <T extends FieldValues>({ children, placeholder, type: initialType = "text", ...controls }: Props<T>) => {
  const { field, fieldState } = useController(controls);
  const [type, setType] = useState(initialType);

  const togglePasswordShow = () => {
    if (type === "password") setType("text");
    else if (type === "text") setType("password");
  };

  return (
    <div className="relative">
      <label htmlFor={field.name}>{children}</label>
      <input id={field.name} placeholder={placeholder} type={type} {...field} className={`input mt-10 ${fieldState?.error && "border-red"}`} />
      {initialType === "password" && (
        <button onClick={togglePasswordShow} type="button" className="absolute right-0 top-58 h-24 w-24 -translate-x-1/2 -translate-y-1/2">
          {type === "password" ? <IconEyeOff /> : <IconEyeOn />}
        </button>
      )}
      <div className="body2-normal mt-5 h-10 text-red">{fieldState?.error?.message}</div>
    </div>
  );
};

export default Input;
