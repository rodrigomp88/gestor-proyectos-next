import Sidebar from "./Sidebar";
import ToggleTheme from "./Toggle-theme";

const NavBar = () => {
  return (
    <nav className="sticky flex flex-auto bg-gradient-to-b from-cyan-600 dark:from-cyan-500">
      <h1 className="text-5xl ml-12">Gestor</h1>
      <div className="text-right">
        <Sidebar />
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default NavBar;
