import { useState } from 'react';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';

const DateTimeSelection = ({ onComplete, onBack, selectedInfo }) => {
  const [selectedDate, setSelectedDate] = useState('2025-05-23');
  const [selectedSession, setSelectedSession] = useState('afternoon');
  const [selectedTime, setSelectedTime] = useState('');

  const availableDates = [
    { day: 'Thứ 6', date: '2025-05-23' },
    { day: 'Thứ 7', date: '2025-05-24' },
    { day: 'Chủ nhật', date: '2025-05-25' },
    { day: 'Thứ 2', date: '2025-05-26' },
    { day: 'Thứ 3', date: '2025-05-27' },
    { day: 'Thứ 4', date: '2025-05-28' }
  ];

  const timeSlots = {
    afternoon: [
      '13h00-13h20', '13h20-13h40', '13h40-14h00', '14h00-14h20',
      '14h20-14h40', '14h40-15h00', '15h00-15h20', '15h20-15h40',
      '15h40-16h00', '16h00-16h20'
    ]
  };

  const disabledSlots = ['13h00-13h20', '13h20-13h40', '13h40-14h00', '14h00-14h20', '14h20-14h40', '14h40-15h00', '15h00-15h20', '15h20-15h40'];

  const handleComplete = () => {
    if (selectedDate && selectedSession && selectedTime) {
      onComplete({
        date: selectedDate,
        session: selectedSession,
        time: selectedTime
      });
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-800">
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

      {/* Chọn ngày */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Ngày khám</label>
        <div className="flex space-x-2 overflow-x-auto">
          {availableDates.map((d) => (
            <button
              key={d.date}
              onClick={() => {
                setSelectedDate(d.date);
                setSelectedTime('');
              }}
              className={`min-w-[80px] p-3 rounded-lg text-sm text-center transition-all ${
                selectedDate === d.date ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div>{d.day}</div>
              <div>{new Date(d.date).getDate()}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Buổi khám */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Buổi khám</label>
        <div className="flex space-x-4">
          <button
            disabled
            className="bg-gray-100 text-gray-400 p-3 rounded-lg cursor-not-allowed"
          >
            ☀️ Buổi sáng<br /><span className="text-xs">08:00-12:00</span>
          </button>
          <button
            onClick={() => setSelectedSession('afternoon')}
            className={`p-3 rounded-lg transition-all ${
              selectedSession === 'afternoon' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800'
            }`}
          >
            🌅 Buổi chiều<br /><span className="text-xs">13:00-16:20</span>
          </button>
        </div>
      </div>

      {/* Giờ khám */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Giờ khám</label>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots[selectedSession].map((time) => (
            <button
              key={time}
              onClick={() => !disabledSlots.includes(time) && setSelectedTime(time)}
              disabled={disabledSlots.includes(time)}
              className={`p-2 rounded-lg text-sm transition-all ${
                selectedTime === time ? 'bg-green-600 text-white' :
                disabledSlots.includes(time) ? 'bg-gray-200 text-gray-400 cursor-not-allowed' :
                'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {selectedTime && (
        <button
          onClick={handleComplete}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Xác nhận
        </button>
      )}
    </div>
  );
};

export default DateTimeSelection;
