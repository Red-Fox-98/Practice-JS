import { ModalType } from "src/anotherCode/store/reducers/AppReducer/types";
import { SET_MODAL } from "src/anotherCode/store/constants/app";
import { ActionSetModalType } from "src/anotherCode/store/actions/app/types";

export const actionSetModal = (modal: ModalType): ActionSetModalType => ({
  type: SET_MODAL,
  modal
});
