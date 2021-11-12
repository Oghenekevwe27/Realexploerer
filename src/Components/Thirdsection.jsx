import React from "react";
// import { CgQuote } from "react-icons/cg";
import { FaQuoteLeft } from "react-icons/fa";
import Review from "./Review";

const Thirdsection = () => {

     

        
  return (
    <div>
      <div className="trial">
        <div className="quote">
          <FaQuoteLeft />
        </div>
        <Review
          words="Real Explorer is the most user-friendly platform when it comes to
        mobile. Easier experience to me means more leads, better leads,more
        leases, and higher conversion leads."
          name="Ayoleyi Lurogho"
          position="Director of Growth, Truila"
        />
      </div>
      <div className="banner2"></div>
      <div className="check-neigbourhood-m">
        <form
          action=""
          className="check-neigbourhood 
"
        >
          <h3 className="check-text">Check out a neighbourhood</h3>
          <div>
            <input
              type="text"
              className="n-text  "
              name="neighbourhood"
              placeholder="Enter address,zip,city"
            />
            <button
              type="search"
              className="n-serach "
              name="neighbourhood"
              id=""
            >
              {" "}
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Thirdsection;
