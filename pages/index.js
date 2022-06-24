import { EntryList, Layout } from "../components";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-1 sm:grid-cols-3 pt-3">
        <div className="bg-gradient-to-b from-slate-700 dark:from-slate-900 transition-colors shadow-2xl dark:shadow-inner rounded-md md:p-2 sm:m-2">
          <h1 className="text-3xl md:text-6xl text-center text-zinc-900 dark:text-zinc-400 transition-colors">
            Pendiente
          </h1>
          <div className="mt-5 overflow-y-scroll max-h-screen">
            <EntryList />
          </div>
        </div>
        <div className="bg-gradient-to-b from-yellow-700 dark:from-yellow-900 transition-colors shadow-2xl dark:shadow-inner rounded-md md:p-2 sm:m-2">
          <h1 className="text-3xl md:text-6xl text-center text-zinc-900 dark:text-zinc-400 transition-colors">
            En Progreso
          </h1>
          <div className="mt-5"></div>
        </div>
        <div className="bg-gradient-to-b from-teal-700 dark:from-teal-900 transition-colors shadow-2xl dark:shadow-inner rounded-md md:p-2 sm:m-2">
          <h1 className="text-3xl md:text-6xl text-center text-zinc-900 dark:text-zinc-400 transition-colors">
            Completada
          </h1>
          <div className="mt-5"></div>
        </div>
      </div>
    </Layout>
  );
}
