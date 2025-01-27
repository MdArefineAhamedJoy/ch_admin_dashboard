/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ChevronLeft, ChevronRight, Filter, Grid, List } from 'lucide-react';
import { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: any) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: any) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const formatDate = (date: any) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
    }).format(date);
  };

  const navigateMonth = (direction: any) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div key={day} className="h-24 border border-gray-200 p-2">
          <span
            className={`inline-block ${day === new Date().getDate() ? 'bg-blue-500 text-white rounded-full w-6 h-6 text-center' : ''}`}
          >
            {day}
          </span>
        </div>
      );
    }

    return days;
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className=" mx-auto p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-rose-900 text-white p-2 rounded-md shadow ">
            <Grid className="w-4 h-4" />
            Calendar
          </button>
          <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg shadow ">
            <List className="w-4 h-4" />
            List
          </button>
        </div>
        <button
          className="px-4 flex justify-between  items-center gap-5 py-2 text-white
] text-sm font-medium bg-rose-900 rounded-xl "
        >
          View All Stays
        </button>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-semibold">{formatDate(currentDate)}</h2>
          <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <button
          className="px-4 flex justify-between  items-center gap-5 py-2 text-rose-600
] text-sm font-medium border border-red-500 rounded-md "
        >
          Filter Properties
          <Filter className="w-6 h-6 " />
        </button>
      </div>

      <div className="grid grid-cols-7 shadow-lg rounded-md gap-px">
        {weekDays.map(day => (
          <div key={day} className="p-2  text-sm font-medium text-gray-600 border-t-2 ">
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;
