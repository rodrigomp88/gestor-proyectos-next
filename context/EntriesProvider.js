import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { EntriesContext, entriesReducer } from "./";

const Entries_INITIAL_STATE = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pendiente: lorem imlsun agos tunun catar gulun gatar formik",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "En-Progreso la la lorem imlsun agos tunun catar gulun gatar formik caca pele tutu",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "Terminada lorem imlsun agos tunun catar gulun gatar formik",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description) => {
    const newEntry = {
      _id: uuidv4(),
      description,
      status: "pending",
      createAt: Date.now(),
    };

    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry) => {
    dispatch({ type: "[Entry] Entry-Updated", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Metodos
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
