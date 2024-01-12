import React from "react";

const RatingDinamic: React.FC<any> = ({ value }) => {
  // Utilize a informação 'itens' aqui
  return (
    <>
      {value.map((item: any) => (
        <input key={item.value} type="radio" name="" id="" />
      ))}
    </>
  );
};

export default RatingDinamic;
