interface ModalTitleProps {
  label: string;
}

export default function ModalTitle({ label }: ModalTitleProps) {
  return <h2 style={{ fontSize: "20px", margin: 0 }}>{label}</h2>;
}
