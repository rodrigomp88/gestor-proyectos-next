import { EntryCard } from "./";

export const EntryList = () => {
  return (
    <div>
      <div className="overflow-auto bg-transparent">
        <li className="list-none">
          <EntryCard />
        </li>
      </div>
    </div>
  );
};
