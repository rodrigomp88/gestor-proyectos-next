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
          <textarea
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
        </>
      ) : (
        <>
          <button
            className="outline outline-teal-700 rounded-sm px-2 hover:bg-teal-800 font-bold"
            onClick={() => setIsAddingEntry(true)}
          >
            Agregar nueva tarea
          </button>
        </>
      )}
    </div>
  );
};
