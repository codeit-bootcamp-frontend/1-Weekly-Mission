import Image from "next/image";
import styles from "./Input.module.css";
import { InputProps } from "@/types/client.type";

function Input({
  placeholder,
  id,
  name = "email",
  value,
  onChange,
  eyeButton,
  eyesValue,
  type = "text",
  onEyesToggle,
}: InputProps) {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {eyeButton && (
        <button className={styles.eyes} onClick={onEyesToggle} type="button">
          <Image src={`/icons/eyes${eyesValue ? "On" : "Off"}.svg`} width={18} height={18} alt="" />
        </button>
      )}
    </>
  );
}

export default Input;
