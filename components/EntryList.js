/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useMemo } from "react";
import { EntriesContext, UIContext } from "../context";
import { EntryCard } from "./";

export const EntryList = ({ status }) => {
  const { entries } = useContext(EntriesContext);
  const { isDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const onDropEntry = (e) => {
    const id = e.dataTransfer.getData("text");
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={`h-[75vh] sm:h-[65vh] m-1 ${
        isDragging ? "opacity-40" : "opacity-100"
      } transition-all delay-75`}
    >
      {entriesByStatus.map((entry) => (
        <EntryCard key={entry._id} entry={entry} />
      ))}
    </div>
  );
};
