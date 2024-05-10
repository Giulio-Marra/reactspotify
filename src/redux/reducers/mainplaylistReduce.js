import { GET_ARTIST, GET_ROCK, GET_POP } from "../actions";

const initialstate = {
  content: [],
  contentRock: [],
  contentPop: [],
};

const mainplaylistReduce = (state = initialstate, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        content: action.payload,
      };
    case GET_ROCK:
      return {
        ...state,
        contentRock: state.content.filter(
          (item) => item.name === action.payload
        ),
      };
    case GET_POP:
      return {
        ...state,
        contentPop: action.payload,
      };

    default:
      return state;
  }
};

export default mainplaylistReduce;
