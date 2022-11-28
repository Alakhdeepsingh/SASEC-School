import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import a from "../assests/a.png";
import b from "../assests/b.png";
import c from "../assests/c.png";

const Activity = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={a} alt="Item1" />
          <p className="legend">Education</p>
        </div>
        <div>
          <img src={b} alt="Item3" />
          <p className="legend">Dance & Music</p>
        </div>
      
        <div>
          <img src={c} alt="Item4" />
          <p className="legend">Games</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Activity;