import { useContext } from "react";
import { UIContext } from "../context";

export const EntryCard = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);
  const onDragStart = (e) => {
    e.dataTransfer.setData("text", entry._id);
    startDragging();
  };

  const onDragEnd = () => {
    endDragging();
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className="mb-1 p-1 text-slate-300 dark:text-slate-400 hover:bg-slate-700 cursor-grab bg-gray-900  rounded-md shadow-md"
    >
      <p className="text-md md:text-xl">{entry.description}</p>
      <p className="mt-3 text-right text-xs text-slate-400 dark:text-slate-500">
        Creada hace 20 min
      </p>
    </div>
  );
};
