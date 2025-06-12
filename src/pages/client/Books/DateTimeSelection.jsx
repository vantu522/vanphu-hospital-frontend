import { useState } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const DateTimeSelection = ({ onComplete, onBack, selectedInfo }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [currentWeek, setCurrentWeek] = useState(0);

  const generateWeeks = () => {
    const weeks = [];
    const today = new Date();
    const currentMonday = new Date(today);
    currentMonday.setDate(today.getDate() - today.getDay() + 1); 
    
    for (let weekOffset = 0; weekOffset < 4; weekOffset++) {
      const weekStart = new Date(currentMonday);
      weekStart.setDate(currentMonday.getDate() + (weekOffset * 7));
      
      const week = [];
      const dayNames = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
      
      for (let i = 0; i < 7; i++) {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        week.push({
          dayName: dayNames[i],
          date: date.getDate(),
          fullDate: date.toISOString().split('T')[0],
          dateObj: date
        });
      }
      weeks.push(week);
    }
    return weeks;
  };

  const weeks = generateWeeks();
  const currentMonth = weeks[currentWeek][0].dateObj.toLocaleDateString('vi-VN', { month: 'long' });
  const currentYear = weeks[currentWeek][0].dateObj.getFullYear();

  const timeSlots = {
    morning: [
      '06:00', '06:15', '06:30', '06:45', '07:00', '07:15', '07:30', '07:45', '08:00', '08:15', '08:30',
      '08:45', '09:00', '09:15', '09:30', '09:45', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15',
      '11:30', '11:45'
    ],
    afternoon: [
      '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45', '16:00',
      '16:15'
    ],
    evening: []
  };

  const disabledSlots = ['06:15', '14:00', '14:15'];

  const handleDateSelect = (day) => {
    setSelectedDate(day.fullDate);
    setSelectedTime(''); 
  };

  const handleTimeSelect = (time) => {
    if (!disabledSlots.includes(time)) {
      setSelectedTime(time);
    }
  };

  const handleComplete = () => {
    if (selectedDate && selectedTime) {
      onComplete({
        date: selectedDate,
        time: selectedTime
      });
    }
  };

  const nextWeek = () => {
    if (currentWeek < weeks.length - 1) {
      setCurrentWeek(currentWeek + 1);
      setSelectedDate(null);
      setSelectedTime('');
    }
  };

  const prevWeek = () => {
    if (currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
      setSelectedDate(null);
      setSelectedTime('');
    }
  };

  const renderTimeSlots = (slots, title) => {
    if (slots.length === 0) return null;
    
    return (
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3 pb-2 border-b border-gray-200">
          {title}
        </h3>
        <div className="grid grid-cols-10 gap-2">
          {slots.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              disabled={!selectedDate || disabledSlots.includes(time)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedTime === time 
                  ? 'bg-green-600 text-white' 
                  : disabledSlots.includes(time) || !selectedDate
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="flex items-center text-green-600 hover:text-green-800">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Quay lại
        </button>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Chọn thời gian khám</h2>
        <div className="text-gray-600">
          <p>Chuyên khoa: <span className="text-blue-600 font-medium">{selectedInfo?.specialty?.name}</span></p>
          <p>Bác sĩ: <span className="text-blue-600 font-medium">{selectedInfo?.doctor?.name}</span></p>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        {/* Month/Year Header */}
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={prevWeek}
            disabled={currentWeek === 0}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2">
            <span className="text-lg font-medium capitalize">{currentMonth}</span>
            <span className="text-lg font-medium">{currentYear}</span>
          </div>
          
          <button 
            onClick={nextWeek}
            disabled={currentWeek === weeks.length - 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {weeks[currentWeek].map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">{day.dayName}</div>
              <button
                onClick={() => handleDateSelect(day)}
                className={`w-12 h-12 rounded-full text-sm font-medium transition-all ${
                  selectedDate === day.fullDate
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {day.date}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-4">
            <p className="text-gray-600">
              Ngày đã chọn: <span className="font-medium text-blue-600">{new Date(selectedDate).toLocaleDateString('vi-VN')}</span>
            </p>
          </div>

          {renderTimeSlots(timeSlots.morning, 'Buổi sáng')}
          {renderTimeSlots(timeSlots.afternoon, 'Buổi chiều')}
          {renderTimeSlots(timeSlots.evening, 'Buổi tối')}
        </div>
      )}

      {selectedTime && (
        <div className="text-center mt-6">
          <button
            onClick={handleComplete}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium text-lg transition-all"
          >
            Tiếp tục
          </button>
        </div>
      )}
    </div>
  );
};

export default DateTimeSelection;