import React, { useState, useMemo } from 'react';
import { Calendar, Clock, User, Plus, Edit, Trash2, Search, Filter, Save, X, MapPin, Stethoscope, Settings } from 'lucide-react';

const DoctorSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('week'); // 'week', 'day'
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSlotModal, setShowSlotModal] = useState(false);
  const [selectedShift, setSelectedShift] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDateForSlots, setSelectedDateForSlots] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');

  // Sample data
  const [doctors] = useState([
    { id: 1, name: 'BS. Nguyễn Văn A', specialty: 'Tim mạch', phone: '0901234567', department: 'cardiology' },
    { id: 2, name: 'BS. Trần Thị B', specialty: 'Nhi khoa', phone: '0907654321', department: 'pediatrics' },
    { id: 3, name: 'BS. Lê Văn C', specialty: 'Thần kinh', phone: '0905551234', department: 'neurology' },
    { id: 4, name: 'BS. Phạm Thị D', specialty: 'Da liễu', phone: '0903334567', department: 'dermatology' }
  ]);

  // Time slots management - each doctor can have different time slots
  const [timeSlots, setTimeSlots] = useState([
    // Doctor 1 - Aug 4
    { id: 1, doctorId: 1, date: '2025-08-04', startTime: '08:00', endTime: '08:30', room: 'P101', status: 'available', patientName: '', patientPhone: '' },
    { id: 2, doctorId: 1, date: '2025-08-04', startTime: '08:30', endTime: '09:00', room: 'P101', status: 'booked', patientName: 'Nguyễn Văn X', patientPhone: '0901111111' },
    { id: 3, doctorId: 1, date: '2025-08-04', startTime: '09:00', endTime: '09:30', room: 'P101', status: 'available', patientName: '', patientPhone: '' },
    { id: 4, doctorId: 1, date: '2025-08-04', startTime: '09:30', endTime: '10:00', room: 'P101', status: 'blocked', patientName: '', patientPhone: '' },
    { id: 5, doctorId: 1, date: '2025-08-04', startTime: '14:00', endTime: '14:30', room: 'P101', status: 'available', patientName: '', patientPhone: '' },
    { id: 6, doctorId: 1, date: '2025-08-04', startTime: '14:30', endTime: '15:00', room: 'P101', status: 'booked', patientName: 'Trần Thị Y', patientPhone: '0902222222' },
    
    // Doctor 2 - Aug 4
    { id: 7, doctorId: 2, date: '2025-08-04', startTime: '08:00', endTime: '08:15', room: 'P202', status: 'available', patientName: '', patientPhone: '' },
    { id: 8, doctorId: 2, date: '2025-08-04', startTime: '08:15', endTime: '08:30', room: 'P202', status: 'booked', patientName: 'Lê Văn Z', patientPhone: '0903333333' },
    { id: 9, doctorId: 2, date: '2025-08-04', startTime: '08:30', endTime: '08:45', room: 'P202', status: 'available', patientName: '', patientPhone: '' },
  ]);

  const [newSlot, setNewSlot] = useState({
    doctorId: '',
    date: '',
    startTime: '08:00',
    endTime: '08:30',
    room: '',
    status: 'available',
    duration: 30 // minutes
  });

  const [slotTemplate, setSlotTemplate] = useState({
    doctorId: '',
    date: '',
    startTime: '08:00',
    endTime: '12:00',
    slotDuration: 30,
    breakTime: 0,
    room: ''
  });

  const departments = [
    { id: 'all', name: 'Tất cả khoa' },
    { id: 'cardiology', name: 'Tim mạch' },
    { id: 'pediatrics', name: 'Nhi khoa' },
    { id: 'neurology', name: 'Thần kinh' },
    { id: 'dermatology', name: 'Da liễu' }
  ];

  // Get current week dates
  const getCurrentWeekDates = () => {
    const curr = new Date(selectedDate);
    const first = curr.getDate() - curr.getDay();
    const dates = [];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(curr.setDate(first + i));
      dates.push(new Date(date));
    }
    return dates;
  };

  const weekDates = getCurrentWeekDates();

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = filterDepartment === 'all' || doctor.department === filterDepartment;
      return matchesSearch && matchesDepartment;
    });
  }, [doctors, searchTerm, filterDepartment]);

  const getSlotsForDoctorAndDate = (doctorId, date) => {
    const dateStr = date.toISOString().split('T')[0];
    return timeSlots.filter(slot => slot.doctorId === doctorId && slot.date === dateStr)
                   .sort((a, b) => a.startTime.localeCompare(b.startTime));
  };

  const getDoctorById = (id) => doctors.find(doctor => doctor.id === id);

  const generateTimeSlots = () => {
    if (!slotTemplate.doctorId || !slotTemplate.date || !slotTemplate.room) return;

    const startMinutes = timeToMinutes(slotTemplate.startTime);
    const endMinutes = timeToMinutes(slotTemplate.endTime);
    const duration = parseInt(slotTemplate.slotDuration);
    const breakTime = parseInt(slotTemplate.breakTime);
    
    const newSlots = [];
    let currentTime = startMinutes;
    let slotId = Math.max(...timeSlots.map(s => s.id), 0) + 1;

    while (currentTime + duration <= endMinutes) {
      const startTime = minutesToTime(currentTime);
      const endTime = minutesToTime(currentTime + duration);
      
      newSlots.push({
        id: slotId++,
        doctorId: parseInt(slotTemplate.doctorId),
        date: slotTemplate.date,
        startTime,
        endTime,
        room: slotTemplate.room,
        status: 'available',
        patientName: '',
        patientPhone: ''
      });
      
      currentTime += duration + breakTime;
    }

    // Remove existing slots for this doctor and date
    const existingSlots = timeSlots.filter(slot => 
      !(slot.doctorId === parseInt(slotTemplate.doctorId) && slot.date === slotTemplate.date)
    );
    
    setTimeSlots([...existingSlots, ...newSlots]);
    setShowSlotModal(false);
    
    // Reset template
    setSlotTemplate({
      doctorId: '',
      date: '',
      startTime: '08:00',
      endTime: '12:00',
      slotDuration: 30,
      breakTime: 0,
      room: ''
    });
  };

  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const minutesToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  const handleAddSlot = () => {
    if (newSlot.doctorId && newSlot.date && newSlot.room) {
      const slot = {
        id: Math.max(...timeSlots.map(s => s.id), 0) + 1,
        ...newSlot,
        doctorId: parseInt(newSlot.doctorId),
        patientName: '',
        patientPhone: ''
      };
      setTimeSlots([...timeSlots, slot]);
      setNewSlot({
        doctorId: '',
        date: '',
        startTime: '08:00',
        endTime: '08:30',
        room: '',
        status: 'available',
        duration: 30
      });
      setShowAddModal(false);
    }
  };

  const handleEditSlot = () => {
    if (selectedShift) {
      setTimeSlots(timeSlots.map(slot => 
        slot.id === selectedShift.id ? selectedShift : slot
      ));
      setShowEditModal(false);
      setSelectedShift(null);
    }
  };

  const handleDeleteSlot = (id) => {
    setTimeSlots(timeSlots.filter(slot => slot.id !== id));
  };

  const updateSlotStatus = (slotId, newStatus, patientName = '', patientPhone = '') => {
    setTimeSlots(timeSlots.map(slot => 
      slot.id === slotId 
        ? { ...slot, status: newStatus, patientName, patientPhone }
        : slot
    ));
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('vi-VN', { 
      weekday: 'short', 
      day: '2-digit',
      month: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800 border-green-200';
      case 'booked': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'blocked': return 'bg-red-100 text-red-800 border-red-200';
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'available': return 'Trống';
      case 'booked': return 'Đã đặt';
      case 'blocked': return 'Đã khóa';
      case 'completed': return 'Hoàn thành';
      default: return 'Không xác định';
    }
  };

  const getSlotStats = () => {
    const total = timeSlots.length;
    const available = timeSlots.filter(s => s.status === 'available').length;
    const booked = timeSlots.filter(s => s.status === 'booked').length;
    const blocked = timeSlots.filter(s => s.status === 'blocked').length;
    
    return { total, available, booked, blocked };
  };

  const stats = getSlotStats();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="text-blue-600" />
              Quản Lý Lịch Khám Bác Sĩ
            </h1>
            <p className="text-gray-600 mt-1">Quản lý slot thời gian và lịch hẹn của các bác sĩ</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowSlotModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Settings size={20} />
              Tạo Slot Tự Động
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Plus size={20} />
              Thêm Slot
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            <div className="text-sm text-blue-600">Tổng slot</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{stats.available}</div>
            <div className="text-sm text-green-600">Slot trống</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{stats.booked}</div>
            <div className="text-sm text-orange-600">Đã đặt</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-red-600">{stats.blocked}</div>
            <div className="text-sm text-red-600">Đã khóa</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm bác sĩ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('week')}
              className={`px-3 py-2 rounded-lg ${viewMode === 'week' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Tuần
            </button>
            <button
              onClick={() => setViewMode('day')}
              className={`px-3 py-2 rounded-lg ${viewMode === 'day' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Ngày
            </button>
          </div>
        </div>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Lịch Slot Thời Gian</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedDate(new Date(selectedDate.getTime() - 7 * 24 * 60 * 60 * 1000))}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              ←
            </button>
            <span className="font-medium px-4">
              {selectedDate.toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' })}
            </span>
            <button
              onClick={() => setSelectedDate(new Date(selectedDate.getTime() + 7 * 24 * 60 * 60 * 1000))}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-2">
          <div className="font-semibold text-center py-2">Bác sĩ</div>
          {weekDates.map((date, index) => (
            <div key={index} className="font-semibold text-center py-2 border-l">
              {formatDate(date)}
            </div>
          ))}

          {filteredDoctors.map(doctor => (
            <React.Fragment key={doctor.id}>
              <div className="p-3 border-t bg-gray-50 flex items-center gap-2">
                <Stethoscope size={16} className="text-blue-600" />
                <div>
                  <div className="font-medium text-sm">{doctor.name}</div>
                  <div className="text-xs text-gray-600">{doctor.specialty}</div>
                </div>
              </div>
              {weekDates.map((date, dateIndex) => {
                const daySlots = getSlotsForDoctorAndDate(doctor.id, date);
                return (
                  <div key={dateIndex} className="border-l border-t min-h-32 p-1">
                    <div className="max-h-28 overflow-y-auto">
                      {daySlots.map(slot => (
                        <div
                          key={slot.id}
                          className={`text-xs p-1 mb-1 rounded cursor-pointer hover:opacity-80 border ${getStatusColor(slot.status)}`}
                          onClick={() => {
                            setSelectedShift(slot);
                            setShowEditModal(true);
                          }}
                        >
                          <div className="font-medium">{slot.startTime}-{slot.endTime}</div>
                          <div className="flex items-center gap-1">
                            <MapPin size={8} />
                            {slot.room}
                          </div>
                          {slot.patientName && (
                            <div className="text-xs truncate" title={slot.patientName}>
                              {slot.patientName}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {daySlots.length === 0 && (
                      <div className="text-xs text-gray-400 text-center mt-2">Chưa có slot</div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Slot List */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Danh Sách Slot Thời Gian</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Bác sĩ</th>
                <th className="text-left py-3 px-4">Ngày</th>
                <th className="text-left py-3 px-4">Thời gian</th>
                <th className="text-left py-3 px-4">Phòng</th>
                <th className="text-left py-3 px-4">Trạng thái</th>
                <th className="text-left py-3 px-4">Bệnh nhân</th>
                <th className="text-left py-3 px-4">SĐT</th>
                <th className="text-left py-3 px-4">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {timeSlots.filter(slot => {
                const doctor = getDoctorById(slot.doctorId);
                return filteredDoctors.includes(doctor);
              }).slice(0, 20).map(slot => {
                const doctor = getDoctorById(slot.doctorId);
                return (
                  <tr key={slot.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-gray-400" />
                        <div>
                          <div className="font-medium">{doctor?.name}</div>
                          <div className="text-sm text-gray-600">{doctor?.specialty}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{new Date(slot.date).toLocaleDateString('vi-VN')}</td>
                    <td className="py-3 px-4 flex items-center gap-1">
                      <Clock size={16} className="text-gray-400" />
                      {slot.startTime}-{slot.endTime}
                    </td>
                    <td className="py-3 px-4 flex items-center gap-1">
                      <MapPin size={16} className="text-gray-400" />
                      {slot.room}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(slot.status)}`}>
                        {getStatusText(slot.status)}
                      </span>
                    </td>
                    <td className="py-3 px-4">{slot.patientName || '-'}</td>
                    <td className="py-3 px-4">{slot.patientPhone || '-'}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedShift(slot);
                            setShowEditModal(true);
                          }}
                          className="p-1 hover:bg-blue-100 rounded text-blue-600"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteSlot(slot.id)}
                          className="p-1 hover:bg-red-100 rounded text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Auto Generate Slots Modal */}
      {showSlotModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Tạo Slot Tự Động</h3>
              <button onClick={() => setShowSlotModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Bác sĩ</label>
                <select
                  value={slotTemplate.doctorId}
                  onChange={(e) => setSlotTemplate({...slotTemplate, doctorId: e.target.value})}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Chọn bác sĩ</option>
                  {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>{doctor.name} - {doctor.specialty}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Ngày</label>
                <input
                  type="date"
                  value={slotTemplate.date}
                  onChange={(e) => setSlotTemplate({...slotTemplate, date: e.target.value})}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium mb-1">Giờ bắt đầu</label>
                  <input
                    type="time"
                    value={slotTemplate.startTime}
                    onChange={(e) => setSlotTemplate({...slotTemplate, startTime: e.target.value})}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Giờ kết thúc</label>
                  <input
                    type="time"
                    value={slotTemplate.endTime}
                    onChange={(e) => setSlotTemplate({...slotTemplate, endTime: e.target.value})}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium mb-1">Thời lượng slot (phút)</label>
                  <select
                    value={slotTemplate.slotDuration}
                    onChange={(e) => setSlotTemplate({...slotTemplate, slotDuration: e.target.value})}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="15">15 phút</option>
                    <option value="30">30 phút</option>
                    <option value="45">45 phút</option>
                    <option value="60">60 phút</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Thời gian nghỉ (phút)</label>
                  <select
                    value={slotTemplate.breakTime}
                    onChange={(e) => setSlotTemplate({...slotTemplate, breakTime: e.target.value})}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="0">0 phút</option>
                    <option value="5">5 phút</option>
                    <option value="10">10 phút</option>
                    <option value="15">15 phút</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phòng</label>
                <input
                  type="text"
                  value={slotTemplate.room}
                  onChange={(e) => setSlotTemplate({...slotTemplate, room: e.target.value})}
                  placeholder="Ví dụ: P101"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={generateTimeSlots}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <Settings size={16} />
                Tạo Slot
              </button>
              <button
                onClick={() => setShowSlotModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg"
              >
                Hủy
              </button>
            </div>
          </div>
                  </div>
      )}

      {/* Add Slot Modal - Nếu bạn cần modal thêm slot thủ công */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Thêm Slot Thủ Công</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Bác sĩ</label>
                <select
                  value={newSlot.doctorId}
                  onChange={(e) => setNewSlot({ ...newSlot, doctorId: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Chọn bác sĩ</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name} - {doctor.specialty}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Ngày</label>
                <input
                  type="date"
                  value={newSlot.date}
                  onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium mb-1">Giờ bắt đầu</label>
                  <input
                    type="time"
                    value={newSlot.startTime}
                    onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Giờ kết thúc</label>
                  <input
                    type="time"
                    value={newSlot.endTime}
                    onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phòng</label>
                <input
                  type="text"
                  value={newSlot.room}
                  onChange={(e) => setNewSlot({ ...newSlot, room: e.target.value })}
                  placeholder="Ví dụ: P101"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={handleAddSlot}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <Plus size={16} />
                Thêm Slot
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorSchedule;
