export const GET_ARTIST_ONE = "GET_ARTIST_ONE";
export const GET_ARTIST_TWO = "GET_ARTIST_TWO";
export const GET_ARTIST_THREE = "GET_ARTIST_THREE";

export const fillMusicSection = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: GET_ARTIST_ONE, payload: { artistName, data } });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const fillMusicSectiontwo = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: GET_ARTIST_TWO, payload: { artistName, data } });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const fillMusicSectionthree = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: GET_ARTIST_THREE, payload: { artistName, data } });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
