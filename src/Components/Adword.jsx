import React from "react";

const Adword = () => {
  return (
    <div>
      <div className="adwordswrap ">
        <div className="getbox ">
          <h3>Property Advertise</h3>
          {/* <br /> */}
          <h3 className="h4 bold">everyone can trust</h3>
          <br />
          <p>Revolutionalize the way you market your property</p>

          <p>and reach millions of qualified renters.</p>
          <button className="adwordbtn ">Get Started</button>
        </div>
        <div className="lead">
          <p>LEADING SPEC VERIFIED AGENTS</p>
          <div>
            <img
              className="img1"
              src="images/zillow.svg"
              alt="logo for Zillow"
            />
            <img src="images/trulia.svg" alt="logo for trulia" />
            <img src="images/streeteasy.svg" alt="logo for streeteasy  " />
            <img src="images/opendoor.svg" alt="logo for opendoor  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adword;
