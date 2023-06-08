import React from "react";
import img from "../assets/images/about.jpg";
const About = () => {
  return (
    <div style={{width:"90%", margin:"0 auto"}} className="d-flex justify-content-center align-items-center text-start mb-5">
      <div>
        <img style={{width:"700px", height:"500px"}} src={img} alt="" />
      </div>
      <div style={{width:"700px", padding:"50px", fontSize:"17px", letterSpacing:"1px"}}>
        <h3>ABOUT</h3>
        <p> Upgrade Your Lifestyle at South Bay - An Exclusive Waterfront</p> <br />
        <p>Community Immerse yourself in the epitome of impeccably designed homes
          within the gated community of South Bay. Discover a stimulating
          crystal lagoon at the heart of this extraordinary haven, offering an
          array of invigorating activities. Prepare to upgrade your lifestyle
          and unlock a world of endless possibilities.</p> <br />
        <p>
         
           Spend quality time
          indulging in energizing watersports, savoring delectable dining
          experiences at upscale venues, rejuvenating your body in a
          state-of-the-art gym, meandering through lush greenery, or simply
          unwinding by the beach with your loved ones. South Bay presents the
          ideal community where every moment is filled with relaxation,
          excitement, and unforgettable memories.
        </p>
      </div>
    </div>
  );
};

export default About;
