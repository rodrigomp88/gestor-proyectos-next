import { Sidebar, ToggleTheme } from "./";

export const NavBar = () => {
  return (
    <nav className="sticky py-5 ">
      <div className="container flex justify-between">
        <h1 className="text-5xl ml-12 text-yellow-900 dark:text-yellow-500 transition-colors">
          ToDo App
        </h1>
        <div className="mt-2 mr-28 md:mr-9">
          <ToggleTheme />
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};
