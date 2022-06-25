import React from "react";
import { EntryList, NewEntry } from "./";

export const Pendiente = () => {
  return (
    <div className="bg-gray-500 dark:bg-gray-700 shadow-2xl rounded-md md:p-2 sm:m-2">
      <h1 className="text-3xl md:text-6xl text-center text-zinc-300 dark:text-zinc-400">
        Pendiente
      </h1>
      <NewEntry />
      <div className="mt-5 overflow-auto">
        <EntryList status="pending" />
      </div>
    </div>
  );
};
