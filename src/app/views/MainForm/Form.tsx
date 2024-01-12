"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Survey } from "@/app/interfaces/MainForm/types";

const Form = () => {

  const { data: itens, isLoading } = useQuery<Survey>({
    queryKey: ["teste"],
    queryFn: () =>
      fetch(
        "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json"
      ).then((response) => response.json()),
  });

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  const info = JSON.stringify(itens, null, 2);
  

  return (
    <>
      <main className="flex items-center justify-center min-h-screen">
        <p className="absolute top-32 left-96 w-full max-w-md font-bold text-2xl">
          Pesquisa de Satisfação
        </p>
        <div className="bg-white rounded-xl absolute top-44 p-6 w-full max-w-xl">
          <form>{info}</form>
        </div>
      </main>
    </>
  );
};

export default Form;
