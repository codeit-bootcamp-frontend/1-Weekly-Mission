import Button from "@/components/Button/Button";
import Image from "next/image";
import { SetStateAction } from "jotai";
import { Dispatch, ReactNode } from "react";
import useToggle from "@/hooks/useToggle";
import AddLinkModal from "@/modals/AddLink";

const AddLinkInput = ({
  children,
  value,
  setValue,
}: {
  children: ReactNode;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  const addLinkButton = useToggle();

  return (
    <>
      <Image width={20} height={20} src="/icons/link.svg" alt="" />
      {children}
      <Button
        type="button"
        onClick={(e) => {
          if (value) {
            addLinkButton.handleToggle(e);
          }
        }}
      >
        추가하기
      </Button>

      {addLinkButton.state && <AddLinkModal toggler={addLinkButton.handleToggle} title={value} />}
    </>
  );
};

export default AddLinkInput;
