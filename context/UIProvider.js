import { useReducer } from "react";

import { UIContext, uiReducer } from "./";

const UI_INITIAL_STATE = {
  sideMenuOpen: false,
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //Metodos
        closeSideMenu,
        openSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};