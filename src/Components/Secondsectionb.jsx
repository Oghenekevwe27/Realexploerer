import React from "react";
import { Link } from "react-router-dom";
import Boxa from "./Boxa";
// import Boxb from "./Boxb";

const Secondsectionb = () => {
  return (
    <div>
      <div className="listing">
        <p className="greyed-words">INCLUDE FOR EVERY PROPERTY </p>
        <h3>Enhance your listings</h3>
        <p>
          You can get a guarantee our best service list. We will give you 4 main
          service <br /> if you sign an advertise with us. You can add extra
          miles by request.
        </p>
        <Link>Conatct us</Link>
      </div>
      {/* <div className="hello">
        <Boxb />
      </div> */}
      <div className="hello">
        <Boxa
          image={<img src="/images/icons8-camera-64.png" alt="" />}
          title="Professional Photography"
          desc="High quality photos designed to capture the best aspects of any space."
        />
        <Boxa
          image={<img src="/images/icons8-floor-plan-40.png" alt="" />}
          title="House Floor Layout "
          desc="Industry-leading floor plans with accurate measurements to 99% of a property's true size."
        />
        <Boxa
          image={<img src="/images/icons8-brochure-60.png" alt="" />}
          title="Digital Brochure"
          desc="Share a property's photographs, Spec Verified 
          floor plan and virtual tour with a single,convenient link."
        />
        <Boxa
          image={
            <img
              src="/images/icons8-travel-agency-60.png"
              alt=""
            />
          }
          title="Virtual Tour"
          desc="Give house-hunters an authentic feel for
           a property with life-like viewings."
        />
      </div>
    </div>
  );
};

export default Secondsectionb;
