import Head from "next/head";
import { NavBar } from "./";

export const Layout = ({ title = "Administrador de proyectos", children }) => {
  return (
    <div className="items-stretch min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <div className="px-5 flex flex-col">{children}</div>
    </div>
  );
};
