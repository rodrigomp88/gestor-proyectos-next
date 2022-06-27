import { useReducer, useEffect } from "react";
import { entriesApi } from "../apis";
// import { v4 as uuidv4 } from "uuid";

import { EntriesContext, entriesReducer } from "./";

const Entries_INITIAL_STATE = {
  entries: [],
};

export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description) => {
    // const newEntry = {
    //   _id: uuidv4(),
    //   description,
    //   status: "pending",
    //   createAt: Date.now(),
    // };
    const { data } = await entriesApi.post("/entries", { description });
    dispatch({ type: "[Entry] Add-Entry", payload: data });
  };

  const updateEntry = (entry) => {
    dispatch({ type: "[Entry] Entry-Updated", payload: entry });
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get("/entries");
    dispatch({ type: "[Entry] Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

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
