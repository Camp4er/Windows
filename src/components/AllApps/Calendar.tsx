import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, addMonths, subMonths } from 'date-fns';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const startWeek = startOfWeek(startDate);
  const endWeek = endOfWeek(endDate);

  const days = eachDayOfInterval({ start: startWeek, end: endWeek });

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="text-white hover:text-gray-300">
            &lt; Prev
          </button>
          <h2 className="text-xl text-white font-bold">{format(currentDate, 'MMMM yyyy')}</h2>
          <button onClick={handleNextMonth} className="text-white hover:text-gray-300">
            Next &gt;
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-gray-400 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="font-semibold">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day) => (
            <div key={day.toString()} className={`p-3 rounded-lg ${day.getMonth() === currentDate.getMonth() ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-400'}`}>
              {format(day, 'd')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
