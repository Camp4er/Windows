import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, addMonths, subMonths } from 'date-fns';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<{ date: string; title: string }[]>([]);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');

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

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (eventTitle && eventDate) {
      setEvents((prevEvents) => [...prevEvents, { date: eventDate, title: eventTitle }]);
      setEventTitle('');
      setEventDate('');
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-9 w-full">
      <div className="w-full h-auto bg-gray-800 rounded-lg shadow-lg p-6">
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
          {days.map((day) => {
            const dayString = format(day, 'yyyy-MM-dd');
            const dayEvents = events.filter(event => event.date === dayString);
            return (
              <div key={day.toString()} className={`p-3 rounded-lg hover:bg-gray-800 ${day.getMonth() === currentDate.getMonth() ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-400'}`}>
                {format(day, 'd')}
                {dayEvents.length > 0 && (
                  <div className="mt-1 text-xs text-yellow-300">
                    {dayEvents.map(event => (
                      <div key={event.title}>{event.title}</div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Event Input Form */}
        <form onSubmit={handleAddEvent} className="mt-6 flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Event Title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400"
          />
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md transition duration-200">
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calendar;
