import { GET_ARTIST_ONE } from "../actions";
import { GET_ARTIST_TWO } from "../actions";
import { GET_ARTIST_THREE } from "../actions";

const initialState = {
  contentone: [],
  contenttwo: [],
  contentthree: [],
};

const mainplaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST_ONE:
      return {
        ...state,
        contentone: action.payload,
      };
    case GET_ARTIST_TWO:
      return {
        ...state,
        contenttwo: action.payload,
      };
    case GET_ARTIST_THREE:
      return {
        ...state,
        contentthree: action.payload,
      };
    default:
      return state;
  }
};

export default mainplaylistReducer;
