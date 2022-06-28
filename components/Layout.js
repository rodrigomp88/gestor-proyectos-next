import Head from "next/head";
import { NavBar } from "./";

export const Layout = ({ title = "Administrador de proyectos", children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <div className="p-1">{children}</div>
    </div>
  );
};
