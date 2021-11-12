import React from "react";

const Review = ({words,name,position}) => {
  return (
    <div className="Review">
      <div className="Review-words">
        {words}
      </div>
      <div className="Review-words reviwer">
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Review;
