import { AppActionTypes } from "src/anotherCode/store/actions/app/types";
import { SET_MODAL } from "src/anotherCode/store/constants/app";
import { AppInitialStateType } from "src/anotherCode/store/reducers/AppReducer/types";

const initialState: AppInitialStateType = {
  modal: "disabled",
  baseURL: ""
};

const AppReducer = (state = initialState, action: AppActionTypes): AppInitialStateType => {
  switch (action.type) {
    case SET_MODAL: {
      return {
        ...state,
        modal: action.modal
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
