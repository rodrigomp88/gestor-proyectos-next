import React from "react";
import { EntryList } from "./EntryList";

export const Pendiente = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 dark:from-gray-700 shadow-2xl dark:shadow-inner rounded-md md:p-2 sm:m-2">
      <h1 className="text-3xl md:text-6xl text-center text-zinc-400">
        Pendiente
      </h1>
      <div className="mt-5 overflow-auto ">
        <EntryList />
      </div>
    </div>
  );
};
