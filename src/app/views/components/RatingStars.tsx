import React, { useState } from "react";

const RatingStars = ({ value, onChange }: any) => {
  const createInput = (i: number) => {
    i = i + 1;
    return (
      <>
        <input
          type="radio"
          name="rating-2"
          key={i}
          className="mask mask-star-2 bg-orange-400"
          checked={value === i ? true : false}
          onClick={() => onChange(i)}
        />
      </>
    );
  };

  return (
    <div className="rating gap-5">
      {Array.from({ length: 5 }, (_, i) => i).map(createInput)}
    </div>
  );
};

export default RatingStars;
