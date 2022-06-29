import React, { useContext, useState } from "react";
import { EntriesContext, UIContext } from "../context";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState("");
  // const [isAdding, setIsAdding] = useState(false);
  // const [touched, setTouched] = useState(false);

  const onTextChanges = (e) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setInputValue("");
  };

  return (
    <div className="flex flex-col justify-center py-1">
      {isAddingEntry ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              <div className="rounded-md relative flex flex-col w-full bg-gradient-to-b from-gray-800 to-transparent dark:from-gray-900 shadow-2xl ">
                <div className="flex items-start justify-between p-5 rounded-t ">
                  <div className="relative p-6 flex-auto">
                    <h1 className="text-3xl text-center">
                      Agregue una nueva tarea
                    </h1>
                    <textarea
                      className="w-full py-5 my-5 rounded-md"
                      value={inputValue}
                      onChange={onTextChanges}
                      placeholder="Ingresa nueva tarea"
                      // onBlur={() => setTouched(true)}
                    />
                    <div className="flex justify-between pt-2">
                      <button
                        className="outline outline-teal-700 rounded-sm px-2 hover:bg-teal-800 font-bold"
                        onClick={onSave}
                      >
                        Guardar
                      </button>
                      <button
                        className="outline outline-red-700 rounded-sm px-2 hover:bg-red-800 font-bold"
                        onClick={() => setIsAddingEntry(false)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <>
        <button
          className={`outline outline-teal-700 rounded-sm px-2 hover:bg-teal-800 font-bold ${
            isAddingEntry ? "opacity-40" : "opacity-100"
          }`}
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar nueva tarea
        </button>
      </>
    </div>
  );
};
