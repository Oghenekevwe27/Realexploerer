import React from "react";
import Navbar from "../Components/Navbar";
import Adword from "../Components/Adword";
import Secondsections from "../Components/Secondsections";
// import Box from "../Components/Box";
import Thirdsection from "../Components/Thirdsection";
import Footer from "../Components/Footer";

const Advertising = () => {
  return (
    <div className="ads ">
      <div className="banner">
        <Navbar />
      </div>
      <div>
        <Adword />
      </div>
      <div>
        <Secondsections />
      </div>
      <div>
        <Thirdsection />
      </div>
      <hr />
      <Footer/>
    </div>
  );
};

export default Advertising;
