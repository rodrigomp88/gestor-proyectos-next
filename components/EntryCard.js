import { useContext } from "react";
import { useRouter } from "next/router";
import { UIContext } from "../context";
import { dateFunctions } from "../utils";

export const EntryCard = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const router = useRouter();
  const onDragStart = (e) => {
    e.dataTransfer.setData("text", entry._id);
    startDragging();
  };

  const onDragEnd = () => {
    endDragging();
  };

  const onClick = () => {
    router.push(`/entries/${entry._id}`);
  };

  return (
    <div
      onClick={onClick}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className="mb-1 p-1 text-slate-300 dark:text-slate-400 hover:bg-slate-700 cursor-grab bg-gray-900  rounded-md shadow-md"
    >
      <p className="text-md md:text-xl">{entry.description}</p>
      <p className="mt-3 text-right text-xs text-slate-400 dark:text-slate-500">
        Creada {dateFunctions.getFormatDistanceToNow(entry.createAt)}
      </p>
    </div>
  );
};
