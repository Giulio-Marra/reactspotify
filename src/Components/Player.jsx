import React from "react";
import imgShuffle from "../assets/playerbuttons/shuffle.png";
import imgPrev from "../assets/playerbuttons/prev.png";
import imgPlay from "../assets/playerbuttons/play.png";
import imgNext from "../assets/playerbuttons/next.png";
import imgRepeat from "../assets/playerbuttons/repeat.png";

function Player() {
  return (
    <div class="container-fluid fixed-bottom bg-container pt-1">
      <div class="row h-100">
        <div class="col-lg-10 offset-lg-2">
          <div class="row h-100 flex-column justify-content-center align-items-center">
            <div class="col-6 col-md-4 playerControls">
              <div class="d-flex">
                <a href="#">
                  <img src={imgShuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={imgPrev} alt="prev" />
                </a>
                <a href="#">
                  <img src={imgPlay} alt="play" />
                </a>
                <a href="#">
                  <img src={imgNext} alt="next" />
                </a>
                <a href="#">
                  <img src={imgRepeat} alt="repeat" />
                </a>
              </div>
              <div className="progressBar mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
