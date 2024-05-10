import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ARTIST, GET_ROCK, fillMusicSection } from "../redux/actions";

function Mainsec() {
  const artists = useSelector((state) => state.artist.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillMusicSection("acdc"));
    dispatch({ type: GET_ROCK, payload: "green day" });
  }, []);

  console.log(artists);

  return (
    <main class="col-12 col-md-9 offset-md-3 mainPage">
      <div class="row">
        <div class="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div class="row">
        <div class="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Mainsec;
