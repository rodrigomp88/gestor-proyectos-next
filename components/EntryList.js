/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useMemo } from "react";
import { EntriesContext, UIContext } from "../context";
import { EntryCard } from "./";

export const EntryList = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const onDropEntry = (e) => {
    const id = e.dataTransfer.getData("text");
    const entry = entries.find((e) => e._id === id);
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={`h-[70vh] sm:h-[60vh] m-1 ${
        isDragging ? "border-dashed border-2 border-gray-500" : " opacity-100"
      } `}
    >
      {entriesByStatus.map((entry) => (
        <EntryCard key={entry._id} entry={entry} />
      ))}
    </div>
  );
};
