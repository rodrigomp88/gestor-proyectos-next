import React, { useContext, useState } from "react";
import { EntriesContext } from "../context";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // const [touched, setTouched] = useState(false);
  const { addNewEntry } = useContext(EntriesContext);

  const onTextChanges = (e) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setIsAdding(false);
    setInputValue("");
  };

  return (
    <div className="flex flex-col justify-center py-3">
      {isAdding ? (
        <>
          <textarea
            value={inputValue}
            onChange={onTextChanges}
            placeholder="Ingrese un valor"
            // onBlur={() => setTouched(true)}
          />
          <div className="flex justify-between pt-2">
            <button
              className="outline outline-teal-700 rounded-sm px-2 hover:bg-teal-800 text-slate-300 font-bold"
              onClick={onSave}
            >
              Guardar
            </button>
            <button
              className="outline outline-amber-700 rounded-sm px-2 hover:bg-amber-800 text-slate-300 font-bold"
              onClick={() => setIsAdding(false)}
            >
              Cancelar
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            className="outline outline-teal-700 rounded-sm px-2 hover:bg-teal-800 text-slate-300 font-bold"
            onClick={() => setIsAdding(true)}
          >
            Agregar nueva tarea
          </button>
        </>
      )}
    </div>
  );
};
