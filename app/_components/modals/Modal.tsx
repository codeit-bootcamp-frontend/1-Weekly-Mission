"use client";

import { IconClose } from "public/svgs";
import { InputHTMLAttributes, ReactNode, SyntheticEvent, useContext } from "react";
import { ModalContext } from "@/components/Providers";
import { Button, ButtonProps } from "@/components/buttons";

const Modal = () => {
  const { modal, setModal } = useContext(ModalContext);

  const closeModal = () => {
    setModal(null);
  };

  const handleModalSubmit = (e: SyntheticEvent) => {
    closeModal();
    e.preventDefault();
  };

  const handleModalClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {modal && (
        <div onClick={closeModal} className="fixed bottom-0 left-0 right-0 top-0 z-floating bg-[rgba(0,0,0,0.4)]">
          <form
            onSubmit={handleModalSubmit}
            onClick={handleModalClick}
            className="absolute left-1/2 top-1/2 z-floating flex w-360 -translate-x-1/2 -translate-y-1/2 flex-col gap-15 rounded-lg bg-white px-40 py-32"
          >
            {modal}
            <button onClick={closeModal} className="absolute right-15 top-15">
              <IconClose />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

interface Props {
  children: ReactNode;
}

const Title = ({ children }: Props) => {
  return <h1 className="w-full pb-5 text-center text-18 font-700">{children}</h1>;
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ placeholder, onChange }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      className="h-60 w-full rounded-sm border border-solid border-gray-60 px-15 py-18 text-16 outline-none focus:border-primary"
    />
  );
};

const PrimaryButton = ({ children, onClick }: ButtonProps) => {
  return (
    <div className="h-50">
      <Button onClick={onClick}>{children}</Button>
    </div>
  );
};

const SecondaryButton = ({ children, onClick }: ButtonProps) => {
  return (
    <div className="h-50">
      <Button.Secondary onClick={onClick}>{children}</Button.Secondary>
    </div>
  );
};

Modal.Title = Title;
Modal.Input = Input;
Modal.PrimaryButton = PrimaryButton;
Modal.SecondaryButton = SecondaryButton;

export default Modal;
