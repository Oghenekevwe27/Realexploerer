import React from "react";

const Boxa = ({ image, title, desc }) => {
  return (
    <div>
      <div className="cardsec">
        <div className="cardsec-image">{image}</div>
        <div className="cardsec-top">
          <h4 className="cardsec-title">{title}</h4>
          <p className="cardsec-desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Boxa;
