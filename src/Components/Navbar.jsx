import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar ">
        <div className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Buy
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Rent
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Sell
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              Home Loans
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              save to Rent/Buy
            </Link>
          </li>

          <li className="nav-brand">
            <img src="/images/logo (1).svg" alt="" />
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="#">
              Advertise
            </Link>{" "}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Help
            </Link>{" "}
          </li>
          <li className="nav-item signup">
            <button className="btn text-white">Sign up</button>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
