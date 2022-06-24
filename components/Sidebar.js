import { useContext } from "react";
import Link from "next/link";
import { UIContext } from "../context";

export const Sidebar = () => {
  const { sideMenuOpen, openSideMenu, closeSideMenu } = useContext(UIContext);

  return (
    <>
      {sideMenuOpen ? (
        <button
          className="flex items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={closeSideMenu}
        >
          <h1 className="text-4xl text-red-900 dark:text-red-500 transition-colors">
            Cerrar
          </h1>
        </button>
      ) : (
        <button
          onClick={openSideMenu}
          className="fixed z-30 items-center cursor-pointer right-10 top-6"
        >
          <h1 className="text-4xl text-teal-900 dark:text-teal-500 transition-colors">
            Menu
          </h1>
        </button>
      )}

      <div
        className={`top-0 right-0 w-[60vw] sm:w-[30vw] p-10 pl-10 backdrop-blur-md backdrop-brightness fixed h-full z-40 ease-in-out duration-300 ${
          sideMenuOpen ? "translate-y-100" : "translate-x-full"
        }`}
      >
        <div className="mt-20 text-3xl text-center leading-loose">
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
