import React from "react";
import { FcCalendar } from "react-icons/fc";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useAppContext } from "../context/appContext";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useAppContext();

  const handlePrevMonth = () => setMonthIndex(monthIndex - 1);
  const handleNextMonth = () => setMonthIndex(monthIndex + 1);

  return (
    <div className="px-4 py-2 flex items-center">
      <FcCalendar className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-3xl text-gray-400">MyCalendar</h1>
      <button className="border rounded py-2 px-4 mr-5">Today</button>
      <button onClick={handlePrevMonth}>
        <AiOutlineLeft className="cursor-pointer text-gray-600 mx-2" />
      </button>
      <button onClick={handleNextMonth}>
        <AiOutlineRight className="cursor-pointer text-gray-600 mx-2" />
      </button>
    </div>
  );
};

export default CalendarHeader;
