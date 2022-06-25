/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useMemo } from "react";
import { EntriesContext } from "../context";
import { EntryCard } from "./";

export const EntryList = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  return (
    <div className="h-[75vh] sm:h-[65vh] m-1">
      {entriesByStatus.map((entry) => (
        <EntryCard key={entry._id} entry={entry} />
      ))}
    </div>
  );
};
