import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface Props {
  id: number;
}

export interface IhandleModal {
  (e: MouseEvent): void;
}

export interface TabsProps {
  handleModal: IhandleModal;
}

export interface ControllerProps extends Pick<TabsProps, "handleModal"> {}

export interface AddFloatProps extends Pick<TabsProps, "handleModal"> {}
