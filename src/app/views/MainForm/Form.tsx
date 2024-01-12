"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import { Survey } from "@/app/interfaces/MainForm/types";
import RatingStars from "../components/RatingStars";
import RatingDinamic from "../components/RatingDinamic";
import RatingStatic from "../components/RatingStatic";

const Form: React.FC = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  const { data, isLoading } = useQuery<any>({
    queryKey: ["teste"],
    queryFn: () =>
      fetch(
        "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json"
      ).then((response) => response.json()),
  });

  if (isLoading) {
    return <p>Carregando...</p>;
  }
  var survey = data.itens;

  return (
    <>
      <main className="flex items-center justify-center min-h-screen">
        <p className="absolute top-32 left-96 w-full max-w-md font-bold text-2xl">
          Pesquisa de Satisfação
        </p>
        <div className="bg-white rounded-xl absolute top-44 p-6 w-full max-w-xl">
          <form>
            {survey.map((item: any) => (
              <div key={item.typeQuestion}>
                <p>
                  {item.typeQuestion !== 4 ? item.content : ""}{" "}
                  {item.mandatory === true ? "" : <p>Opcional</p>}
                </p>
                {item.typeQuestion === 1 ? (
                  <RatingStars value={rating || item.answerValue} onChange={handleRatingChange} />
                ) : item.typeQuestion === 2 ? (
                  <RatingStatic value={item.answerValue} />
                ) : item.typeQuestion === 3 ? (
                  <textarea name="" id=""></textarea>
                ) : item.typeQuestion === 4 ? (
                  <select>
                    <option value="">{item.content}</option>
                  </select>
                ) : item.typeQuestion === 5 ? (
                  <RatingDinamic value={item?.itens} />
                ) : item.typeQuestion === 6 ? (
                  <RatingDinamic value={item?.itens} />
                ) : (
                  ""
                )}
              </div>
            ))}
          </form>
          {/* {survey.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))} */}
        </div>
      </main>
    </>
  );
};

export default Form;
