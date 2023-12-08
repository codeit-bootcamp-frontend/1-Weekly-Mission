import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface Props {
  id: number;
}

export interface IhandleModal {
  (e: MouseEvent): void;
}

export interface TabsProps {
  id: number;
  setTitle: Dispatch<SetStateAction<string>>;
  handleModal: IhandleModal;
}

export interface ControllerProps extends Pick<TabsProps, "handleModal"> {
  title: string;
}

export interface AddFloatProps extends Pick<TabsProps, "handleModal"> {}
