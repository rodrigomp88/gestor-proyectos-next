export const EntryCard = ({ entry }) => {
  return (
    <div className="mb-1 p-1 text-slate-300 dark:text-slate-400 hover:bg-slate-700 cursor-grab bg-gray-900  rounded-md shadow-md">
      <p className="text-md md:text-xl">{entry.description}</p>
      <p className="mt-3 text-right text-xs text-slate-400 dark:text-slate-500">
        Creada hace 20 min
      </p>
    </div>
  );
};
