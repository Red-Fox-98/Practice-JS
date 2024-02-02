import { ModalType } from "src/anotherCode/store/reducers/AppReducer/types";
import { SET_MODAL } from "src/anotherCode/store/constants/app";

export type ActionSetModalType = {
  type: typeof SET_MODAL;
  modal: ModalType;
};

export type AppActionTypes = ActionSetModalType;
