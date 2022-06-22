import { useContext } from "react";
import Link from "next/link";
import { UIContext } from "../context";

const Sidebar = () => {
  const { sideMenuOpen, openSideMenu, closeSideMenu } = useContext(UIContext);

  return (
    <>
      {sideMenuOpen ? (
        <button
          className="flex text-4xl items-center cursor-pointer fixed left-1 top-1 z-50"
          onClick={closeSideMenu}
        >
          <i className="fa fa-times-circle" aria-hidden="true">
            x
          </i>
        </button>
      ) : (
        <svg
          onClick={openSideMenu}
          className="fixed z-30 items-center cursor-pointer left-1 top-1"
          fill="#262626"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0 w-[75vw] p-10 pl-10 bg-gray-100 dark:bg-gray-900 fixed h-full z-40 ease-in-out duration-300 ${
          sideMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mt-20 text-3xl font-semibold text-center leading-loose">
          <h3>
            <Link href="/">
              <a onClick={closeSideMenu}>Inicio</a>
            </Link>
          </h3>
          <h3>
            <Link href="/nosotros">
              <a onClick={closeSideMenu}>Nosotros</a>
            </Link>
          </h3>
          <h3>
            <Link href="/servicios">
              <a onClick={closeSideMenu}>Servicios</a>
            </Link>
          </h3>
          <h3>
            <Link href="/contacto">
              <a onClick={closeSideMenu}>Contacto</a>
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
