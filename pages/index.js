import { EntryList, Layout, NewEntry } from "../components";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="flex justify-center">
        <NewEntry />
      </div>
      <div className="grid grid-cols-3 pt-3">
        <div className="bg-gradient-to-b from-teal-700 dark:from-teal-800 shadow-2xl rounded-md md:p-2 sm:m-2">
          <h1 className="text-3xl md:text-6xl text-center text-zinc-300 dark:text-zinc-400">
            Pendiente
          </h1>
          <div className="mt-5 overflow-auto">
            <EntryList status="pending" />
          </div>
        </div>
        <div className="bg-gradient-to-b from-teal-700 dark:from-teal-800 shadow-2xl rounded-md md:p-2 sm:m-2">
          <h1 className="text-3xl md:text-6xl text-center text-zinc-300 dark:text-zinc-400">
            En Progreso
          </h1>
          <div className="mt-5 overflow-auto">
            <EntryList status="in-progress" />
          </div>
        </div>
        <div className="bg-gradient-to-b from-teal-700 dark:from-teal-800 shadow-2xl rounded-md md:p-2 sm:m-2">
          <h1 className="text-3xl md:text-6xl text-center text-zinc-300 dark:text-zinc-400">
            Completada
          </h1>
          <div className="mt-5 overflow-auto">
            <EntryList status="finished" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
