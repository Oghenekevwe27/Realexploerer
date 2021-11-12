import React from "react";
import Secondsectionb from "./Secondsectionb";
// import Box from "./Box";

import { BiCheckCircle } from "react-icons/bi";

const Secondsections = () => {
  return (
    <div className="secondsection  ">
      <div className="secondsection-first">
        <div>
          <h1>Why Advertise</h1>
          <h1>Your House in Oval</h1>
        </div>
        <div>
          We go the xtra mile to make your property stand out. <br />
          Our premium enhancements are available when you <br />
          are a direct partner with Oval. <br />
        </div>
      </div>
      <div className="boxes">
        <div className="second-box">
          <img src="" alt="" />
          <i class="far fa-check-circle"></i>
          <div className="box-words">
            <BiCheckCircle className="FaCheckCircle" />
            <h3>Mobile-first advantage</h3>
            <p>We reach renters where they actually search-on their phones.</p>
          </div>
        </div>
        <div className="second-box">
          <img src="" alt="" />
          <div>
 
            <BiCheckCircle className="FaCheckCircle" />
            
          </div>
          <div className="box-words">
           
            <h3>Maximum visibility</h3>
            <p>
              Listings are automatically syndicated to our network of the
              largest search
            </p>
          </div>
        </div>
        <div className="second-box">
          <div >
            <BiCheckCircle className="FaCheckCircle" />
          </div>
          <div className="box-words">
            <h3>Actionable leads</h3>
            <p>
              We do the pre-qualification work for you so so you're always
              connected with high-intent leads
            </p>
          </div>
        </div>
      </div>
      <div className="video">
        <img src="/images/stacked-background.svg" alt="" width="80%" />
      </div>
      <Secondsectionb />
    </div>
  );
};

export default Secondsections;
