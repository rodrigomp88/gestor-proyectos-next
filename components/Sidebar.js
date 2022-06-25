import { useContext } from "react";
import Link from "next/link";
import { UIContext } from "../context";
import { ToggleTheme } from "./Toggle-theme";

export const Sidebar = () => {
  const { sideMenuOpen, openSideMenu, closeSideMenu } = useContext(UIContext);

  return (
    <>
      {sideMenuOpen ? (
        <div className="">
          <button
            className="cursor-pointer fixed items-center right-10 top-6 z-50"
            onClick={closeSideMenu}
          >
            <h1 className="text-4xl text-blue-600">Cerrar</h1>
          </button>
        </div>
      ) : (
        <div className="">
          <ToggleTheme />

          <button
            onClick={openSideMenu}
            className="z-30 items-center cursor-pointer fixed right-10 top-6"
          >
            <h1 className="text-4xl text-blue-600 dark:text-blue-700">Menu</h1>
          </button>
        </div>
      )}

      <div
        className={`top-0 right-0 w-[60vw] sm:w-[30vw] p-10 pl-10 bg-yellow-600 backdrop-blur-md fixed h-full z-40 ease-in-out duration-300 ${
          sideMenuOpen ? "translate-y-100" : "translate-x-full"
        }`}
      >
        <div className="mt-10 text-4xl text-white text-center leading-loose">
          <h3>
            <Link href="/">
              <a onClick={closeSideMenu}>Inicio</a>
            </Link>
          </h3>
          <h3>
            <Link href="/">
              <a onClick={closeSideMenu}>Nosotros</a>
            </Link>
          </h3>
          <h3>
            <Link href="/">
              <a onClick={closeSideMenu}>Servicios</a>
            </Link>
          </h3>
          <h3>
            <Link href="/">
              <a onClick={closeSideMenu}>Contacto</a>
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};
