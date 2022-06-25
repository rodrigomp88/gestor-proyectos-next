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
    <div className="flex flex-col justify-center py-3">
      {isAddingEntry ? (
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
              onClick={() => setIsAddingEntry(false)}
            >
              Cancelar
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            className="outline outline-teal-700 rounded-sm px-2 hover:bg-teal-800 text-slate-300 font-bold"
            onClick={() => setIsAddingEntry(true)}
          >
            Agregar nueva tarea
          </button>
        </>
      )}
    </div>
  );
};
