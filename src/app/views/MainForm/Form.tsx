import React from "react";

const Form = async () => {
  const response = await fetch(
    "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json"
  );
  let itens = await response.json();
  itens = JSON.stringify(itens, null, 2);

  return (
    <>
      <main className="flex items-center justify-center min-h-screen">
        <p className="absolute top-32 left-96 w-full max-w-md font-bold text-2xl">
          Pesquisa de Satisfação
        </p>
        <pre>{itens}</pre>
        <div className="bg-white rounded-xl absolute top-44 p-6 w-full max-w-xl">
          {/* <form>
            {itens?.map((question: any) => (
              <div key={question.typeQuestion}>
                <label>
                  {question.content}
                  {question.mandatory && <span>*</span>}
                </label>
                {question.itens ? (
                  <select>
                    {question.itens.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.description}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input type="text" />
                )}
              </div>
            ))}
            <button type="submit">Enviar</button>
          </form> */}
        </div>
      </main>
    </>
  );
};

export default Form;
