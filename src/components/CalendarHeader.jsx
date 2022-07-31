import React from "react";
import { FcCalendar } from "react-icons/fc";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CalendarHeader = () => {
  return (
    <div className="px-4 py-2 flex items-center">
      <FcCalendar className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-3xl text-gray-400">MyCalendar</h1>
      <button className="border rounded py-2 px-4 mr-5">Today</button>
      <button>
        <AiOutlineLeft className="cursor-pointer text-gray-600 mx-2" />
      </button>
      <button>
        <AiOutlineRight className="cursor-pointer text-gray-600 mx-2" />
      </button>
    </div>
  );
};

export default CalendarHeader;
