import produce from "immer";
import * as type from "../type/type";
export const initialState = {
    datas: [],
    detail : [],
    idx: null,
    title: '',
    page: 1,
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
              draft.page = 1;
              break;
            case type.search_data_success:
              draft.datas = action.data.Search;
              draft.isSuccess = true;
              draft.isLoading = false;
              break;
            case type.search_data_error:
              draft.isError = true;
              draft.isLoading = false;
              break; 
            case type.infinite_scroll:
              draft.isLoading = true;
              break;
            case type.infinite_scroll_success:
              draft.datas = [...draft.datas,...action.data.Search]; 
              draft.isSuccess = true;
              draft.isLoading = false;
              break;
            case type.infinite_scroll_error:
              draft.isError = true;
              draft.isLoading = false;  
            case type.get_detail:
              draft.isLoading = true;
              break;
            case type.get_detail_success:
              draft.detail = action.data;
              draft.isLoading = false;
              draft.isSuccess = true;
              break;
            case type.get_detail_error:
              draft.isLoading = false;
              draft.isError = true;
              break;
            case type.choosen_index:
              draft.idx = action.id;
              break;
            case type.add_page:
              draft.page ++;
              break;
            case type.add_title:
              draft.title = action.title;
              break;
            default:
                break;
      }
  });

export default rootReducer;