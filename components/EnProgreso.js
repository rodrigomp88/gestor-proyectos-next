import React from "react";
import { EntryList } from "./EntryList";

export const EnProgreso = () => {
  return (
    <div className="bg-yellow-700 dark:bg-yellow-900 shadow-2xl rounded-md md:p-2 sm:m-2">
      <h1 className="text-3xl md:text-6xl text-center text-zinc-300 dark:text-zinc-400">
        En Progreso
      </h1>
      <div className="mt-5 overflow-auto">
        <EntryList status="in-progress" />
      </div>
    </div>
  );
};
