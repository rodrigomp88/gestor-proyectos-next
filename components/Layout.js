import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ title = "Administrador de proyectos", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="px-10">{children}</div>
    </>
  );
};

export default Layout;
