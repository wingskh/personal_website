import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

interface DarkModeContextType {
  darkMode: boolean;
  dispatch: null | React.Dispatch<any>;
}

const INITIAL_STATE = {
  darkMode: false,
  dispatch: null,
};

export const DarkModeContext =
  createContext<DarkModeContextType>(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
