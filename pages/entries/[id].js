import { useState } from "react";
import { Layout } from "../../components";

const validStatus = ["pending", "in-progress", "finished"];

const EntryPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("pending");

  const onInputChanged = (event) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event) => {
    setStatus(event.target.value);
  };

  const onSave = () => {
    console.log({ inputValue, status });
  };

  return (
    <Layout title="...">
      <div className="grid h-[80vh] place-items-center">
        <div className="px-10 py-5 w-[45vh] bg-gradient-to-b from-teal-600 shadow-2xl rounded-md">
          <p className="text-left text-2xl">Entrada: {inputValue}</p>
          <p className="text-right text-md">Creada hace...</p>
          <div className="flex flex-col justify-items-center mt-5">
            <textarea
              placeholder="Nueva entrada"
              className="rounded-md p-1"
              value={inputValue}
              onChange={onInputChanged}
            />
            <div className="flex flex-col mt-2">
              <div>Estado:</div>
              <select
                className="w-full p-1"
                value={status}
                onChange={onStatusChanged}
              >
                {validStatus.map((option) => (
                  <>
                    <option key={option} value={option}>
                      {option}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <button
              disabled={inputValue.length <= 0}
              onClick={onSave}
              className="w-full bg-lime-600 hover:bg-lime-700 text-xl semi-bold mt-5 rounded-md"
            >
              Guardar
            </button>
            <button className="w-full bg-red-600 hover:bg-red-700 text-xl semi-bold mt-5 rounded-md">
              Borrar Tarea
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EntryPage;
