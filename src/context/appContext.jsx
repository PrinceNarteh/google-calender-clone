import dayjs from "dayjs";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
});

export const AppContextProvider = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  console.log(monthIndex);

  return (
    <AppContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
