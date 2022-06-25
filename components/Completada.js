import React from "react";
import { EntryList } from "./EntryList";

export const Completada = () => {
  return (
    <div className="bg-green-700 dark:bg-green-900 shadow-2xl rounded-md md:p-2 sm:m-2">
      <h1 className="text-3xl md:text-6xl text-center text-zinc-300 dark:text-zinc-400">
        Completada
      </h1>
      <div className="mt-5 overflow-auto">
        <EntryList status="finished" />
      </div>
    </div>
  );
};
