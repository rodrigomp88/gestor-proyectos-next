import React from "react";
import { EntryList } from "./EntryList";

export const EnProgreso = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-700 dark:from-yellow-900 shadow-2xl dark:shadow-inner rounded-md md:p-2 sm:m-2">
      <h1 className="text-3xl md:text-6xl text-center text-zinc-900 dark:text-zinc-400">
        En Progreso
      </h1>
      <div className="mt-5 overflow-y-scroll">
        <EntryList />
      </div>
    </div>
  );
};
