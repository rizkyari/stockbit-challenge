import produce from "immer";
import * as type from "../type/type";
export const initialState = {
    datas: [],
    idx: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
  };

const rootReducer = (state =  initialState, action) =>
  produce(state, (draft) => {
      switch (action.type) {
            case type.get_data:
              draft.isLoading = true;
              break;
            case type.get_data_success:
              draft.datas = action.data.Search;
              draft.isSuccess = true;
              draft.isLoading = false;
              break;
            case type.get_data_error:
              draft.isError = true;
              draft.isSuccess = false;
              break;
            case type.search_data:
              draft.isLoading = true;
              break;
            case type.search_data_success:
              draft.datas = action.data.Search;
              draft.isSuccess = true;
              draft.isLoading = false;
              break;
            case type.search_data_error:
              draft.isError = true;
              draft.isSuccess = false;
              break;  
            default:
                break;
      }
  });

export default rootReducer;