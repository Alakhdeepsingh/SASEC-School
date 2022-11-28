import React from "react";
import vg from "../assests/images.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Sir Alakhdeep Singh Education Center, Kanpur</h1>
          <p>We Are One Of The Biggest, Most Diverse School In Kanpur.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
          At Sir Alakhdeep Singh Education Centre, 
          schooling is not just about a theoretical approach to 
          facts and figures – education here is rooted in a commitment 
          to innovation and service to the community.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          At Sir Alakhdeep Singh Education Centre, schooling is not just about a theoretical approach to facts and figures – education here is rooted in a commitment to innovation and service to the community.

Set yourself apart: Our faculty constantly integrates classroom learning with the available resources and from their own experience to provide valuable skills to the students which they can carry throughout their careers. The students passing our gates emerge ready to make positive changes in diverse communities and organizations at a global level.

Engaged Model of Education: The arena of modern day education not only calls for innovative methodology in imparting instructions but also strengthening core intrinsic values of the myriad Indian culture. Our institution is a cauldron that amalgamates contemporary qualities with traditional values and also acts as a fulcrum that aids students…
          </p>
        </div>
      </div>

      <div className="home4" id="brand">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;