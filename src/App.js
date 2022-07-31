import { useEffect } from "react";
import { useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { useAppContext } from "./context/appContext";
import { getMonth } from "./utils";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useAppContext();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="h-screen flex flex-col font-Itim">
      <CalendarHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Month month={currentMonth} />
      </div>
    </div>
  );
}

export default App;
