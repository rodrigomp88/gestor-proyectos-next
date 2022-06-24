export const EntryCard = () => {
  return (
    <div className="mb-1 p-3 text-slate-300 dark:text-slate-400 transition-colors hover:bg-slate-700 cursor-grab bg-slate-900 bg-opacity-100 rounded-md shadow-md">
      <p className="text-base">
        Esto es el titulo de la tarjeta y una descripcion
      </p>
      <p className="mt-3 text-right text-xs text-slate-400 dark:text-slate-500 transition-colors">
        Creada hace 20 min
      </p>
    </div>
  );
};
