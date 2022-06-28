import Link from "next/link";
import { ToggleTheme } from "./";
import { Sidebar } from "./";

export const NavBar = () => {
  return (
    <nav className="sticky py-5 px-10">
      <div className="container flex justify-between">
        <Link href="/">
          <a>
            <h1 className="text-5xl text-gray-500 transition-colors">
              ToDo-App
            </h1>
          </a>
        </Link>
        <ToggleTheme />
        <Sidebar />
      </div>
    </nav>
  );
};
