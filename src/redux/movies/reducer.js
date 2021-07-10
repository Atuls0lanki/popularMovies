import {
  DETAIL_FAILER,
  DETAIL_REQUEST,
  DETAIL_SUCCESS,
  MOVIES_FAILER,
  MOVIES_REQUEST,
  MOVIES_SUCCESS,
} from "./type";
const initialState = {
  loading: false,
  data: [],
  error: null,
  datail: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case MOVIES_FAILER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        datail: action.payload,
      };
    case DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DETAIL_FAILER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default movieReducer;
