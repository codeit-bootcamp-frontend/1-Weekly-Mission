import "./dialogInput.css";

interface DialogInputProps {
  value?: string | undefined;
}

export default function DialogInput({ value }: DialogInputProps) {
  return (
    <input className="dialog-input" value={value} placeholder="내용 입력" />
  );
}
