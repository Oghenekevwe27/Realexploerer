import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="foot">
        <div className="foot-main">
          <div className="foot-sub">
            <div className="foot-col foot-move">
              <div>
                <h5>SELL YOUR HOME </h5>
                <li>Request an offer</li>
                <li>How it works</li>
                <li>Pricing </li>
                <li>Reviews</li>
                <li> Stories</li>
              </div>
              <div className="foot-col-sub">
                <h5>BUY A HOME</h5>
                <li>Buy</li>
                <li>Tour Homes</li>
              </div>
            </div>
            <div className="foot-col foot-move">
              <div>
                <h5>SAVE TO RENT</h5>
                <li>Our saving plans</li>
                <li>Build a saving culture</li>
              </div>{" "}
              <div className="foot-col-sub">
                <h5>RESOURCES</h5>
                <li>Blog</li>
                <li>Guides</li>
                <li>FAQ</li>
                <li>Help Center</li>
              </div>
            </div>
            <div className="foot-col foot-move">
              <div>
                <h5>ABOUT</h5>
                <li>Company</li>
                <li>Career</li>
                <li>About</li>
                <li>Contacts</li>
              </div>
              <div className="foot-col-sub">
                <h5>AGENTS</h5>
                <li>Make an offer</li>
                <li>Request an offer</li>
              </div>
            </div>
            <div className="foot-col foot-social  ">
              <div className="app-download">
                <h5>DOWNLOAD APP</h5>
                <img className="img1" src="/images/apple-play1.png" alt="" />
                <img src="/images/google-play1.jpg" alt="" />
              </div>
              <div className="foot-col-sub">
                <h5>SOCIAL MEDIA</h5>
                <div className="social-media-icon">
                  <img src="/images/icons8-twitter-circled.svg" alt="" />
                  <img src="/images/icons8-facebook.svg" alt="" />
                  <img src="/images/icons8-linkedin-circled.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-end">
          <div className="foot-end1">
            <p className="footer-lastwords"> © 2021 Real-explorer </p>
            <p className="footer-lastwords"> Terms of Service</p>
            <p className="footer-lastwords"> Privacy Policy</p>
            <p className="footer-lastwords">Trust & safety</p>
            <p>Law Enforcement</p>
          </div>
          <div className="foot-end2">
            <p className="footer-lastwords">Language:</p>
            <select className="footer-option">
              <option value="">En</option>
              <option value=""></option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
