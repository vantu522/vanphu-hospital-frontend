import React, { useState, useEffect } from 'react';
import { Search, Filter, Eye, Edit, Trash2, Calendar, Clock, User, FileText, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const ReceptionManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample data - thay thế bằng dữ liệu thực từ API
  const [receptionData] = useState([
    {
      id: 1,
      type: 'bhyt',
      patientName: 'DƯƠNG VĂN TÚ',
      phone: '0393264758',
      cccd: '036305002145',
      bhyt: 'HS4010370024567',
      department: 'Khoa Nội tổng hợp',
      appointmentDate: '2025-08-24',
      appointmentTime: '08:00 - 08:30',
      session: 'Sáng',
      status: 'confirmed',
      createdAt: '2025-08-23 14:30:00',
      qrCode: 'QR001'
    },
    {
      id: 2,
      type: 'service',
      patientName: 'NGUYỄN THỊ LOAN',
      phone: '0912345678',
      cccd: '036305002146',
      bhyt: '',
      department: 'Khoa Tim mạch',
      appointmentDate: '2025-08-24',
      appointmentTime: '09:00 - 09:30',
      session: 'Sáng',
      status: 'pending',
      createdAt: '2025-08-23 15:45:00',
      qrCode: 'QR002'
    },
    {
      id: 3,
      type: 'bhyt',
      patientName: 'TRẦN VĂN MINH',
      phone: '0987654321',
      cccd: '036305002147',
      bhyt: 'HS4010370024568',
      department: 'Khoa Ngoại tổng hợp',
      appointmentDate: '2025-08-25',
      appointmentTime: '14:00 - 14:30',
      session: 'Chiều',
      status: 'completed',
      createdAt: '2025-08-22 16:20:00',
      qrCode: 'QR003'
    },
    {
      id: 4,
      type: 'service',
      patientName: 'LÊ THỊ HOA',
      phone: '0901234567',
      cccd: '036305002148',
      bhyt: '',
      department: 'Khoa Da liễu',
      appointmentDate: '2025-08-24',
      appointmentTime: '10:30 - 11:00',
      session: 'Sáng',
      status: 'cancelled',
      createdAt: '2025-08-23 09:15:00',
      qrCode: 'QR004'
    }
  ]);

  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { label: 'Chờ xác nhận', color: 'bg-yellow-100 text-yellow-800', icon: AlertCircle },
      confirmed: { label: 'Đã xác nhận', color: 'bg-green-100 text-green-800', icon: CheckCircle },
      completed: { label: 'Hoàn thành', color: 'bg-blue-100 text-blue-800', icon: CheckCircle },
      cancelled: { label: 'Đã hủy', color: 'bg-red-100 text-red-800', icon: XCircle }
    };
    
    const status_info = statusMap[status] || statusMap.pending;
    const Icon = status_info.icon;
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status_info.color}`}>
        <Icon className="w-3 h-3 mr-1" />
        {status_info.label}
      </span>
    );
  };

  const getTypeBadge = (type) => {
    return type === 'bhyt' ? (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        BHYT
      </span>
    ) : (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
        Dịch vụ
      </span>
    );
  };

  // Filter data based on active tab and filters
  const filteredData = receptionData.filter(item => {
    const matchesTab = activeTab === 'all' || item.type === activeTab;
    const matchesSearch = item.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.phone.includes(searchTerm) ||
                         item.cccd.includes(searchTerm);
    const matchesDate = !dateFilter || item.appointmentDate === dateFilter;
    const matchesStatus = !statusFilter || item.status === statusFilter;
    
    return matchesTab && matchesSearch && matchesDate && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const stats = {
    total: receptionData.length,
    bhyt: receptionData.filter(item => item.type === 'bhyt').length,
    service: receptionData.filter(item => item.type === 'service').length,
    pending: receptionData.filter(item => item.status === 'pending').length,
    confirmed: receptionData.filter(item => item.status === 'confirmed').length
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý Đón tiếp</h1>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tổng số</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <FileText className="h-8 w-8 text-gray-400" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">BHYT</p>
              <p className="text-2xl font-bold text-blue-600">{stats.bhyt}</p>
            </div>
            <User className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Dịch vụ</p>
              <p className="text-2xl font-bold text-purple-600">{stats.service}</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-400" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Chờ xác nhận</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
            </div>
            <AlertCircle className="h-8 w-8 text-yellow-400" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Đã xác nhận</p>
              <p className="text-2xl font-bold text-green-600">{stats.confirmed}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setActiveTab('bhyt')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'bhyt'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              BHYT
            </button>
            <button
              onClick={() => setActiveTab('service')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'service'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Dịch vụ
            </button>
          </div>

          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, SĐT, CCCD..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Date Filter */}
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Tất cả trạng thái</option>
            <option value="pending">Chờ xác nhận</option>
            <option value="confirmed">Đã xác nhận</option>
            <option value="completed">Hoàn thành</option>
            <option value="cancelled">Đã hủy</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bệnh nhân
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loại
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Khoa khám
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lịch hẹn
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thời gian tạo
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-900">{item.patientName}</div>
                      <div className="text-sm text-gray-500">SĐT: {item.phone}</div>
                      <div className="text-sm text-gray-500">CCCD: {item.cccd}</div>
                      {item.bhyt && <div className="text-sm text-gray-500">BHYT: {item.bhyt}</div>}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getTypeBadge(item.type)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                        {item.appointmentDate}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1 text-gray-400" />
                        {item.appointmentTime} ({item.session})
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(item.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 p-1 rounded" title="Xem chi tiết">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900 p-1 rounded" title="Chỉnh sửa">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 p-1 rounded" title="Xóa">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Trước
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sau
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Hiển thị <span className="font-medium">{startIndex + 1}</span> đến{' '}
                  <span className="font-medium">
                    {Math.min(startIndex + itemsPerPage, filteredData.length)}
                  </span>{' '}
                  trong <span className="font-medium">{filteredData.length}</span> kết quả
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                        page === currentPage
                          ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                      } ${
                        page === 1 ? 'rounded-l-md' : ''
                      } ${
                        page === totalPages ? 'rounded-r-md' : ''
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReceptionManagement;