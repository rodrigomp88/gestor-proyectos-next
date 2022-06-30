import { useReducer, useEffect } from "react";
import { entriesApi } from "../apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import { v4 as uuidv4 } from "uuid";

import { EntriesContext, entriesReducer } from "./";

const Entries_INITIAL_STATE = {
  entries: [],
};

export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const toastifySuccess = () => {
    toast.success("Entrada actualizada", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
      theme: "dark",
    });
  };

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

  const updateEntry = async (
    { _id, description, status },
    showToast = false
  ) => {
    try {
      const { data } = await entriesApi.put(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({ type: "[Entry] Entry-Updated", payload: data });

      if (showToast) {
        toastifySuccess();
      }
    } catch (error) {
      console.log({ error });
    }
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
      <ToastContainer />
    </EntriesContext.Provider>
  );
};
