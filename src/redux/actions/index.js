export const GET_ARTIST = "GET_ARTIST";
export const GET_ROCK = "GET_ROCK";
export const GET_POP = "GET_POP";

export const fillMusicSection = (artistName) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: GET_ARTIST, payload: data });
        dispatch({ type: GET_ROCK, payload: data });
        dispatch({ type: GET_POP, payload: data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
