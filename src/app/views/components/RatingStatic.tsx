import React from "react";

const RatingStatic = ({ value }: any) => {
  const createInput = (i: any) => {
    return (
      <label key={i}>
        <input
          type="radio"
          name="rating"
          value={i}
          defaultChecked={i === value}
        />
        {i}
      </label>
    );
  };

  return <div>{Array.from({ length: 11 }, (_, i) => i).map(createInput)}</div>;
};

export default RatingStatic;
