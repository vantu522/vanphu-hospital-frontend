import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  Plus, 
  User, 
  Phone, 
  Calendar, 
  FileText, 
  X,
  Save,
  Users,
  CreditCard,
  MapPin,
  Mail,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const PatientManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add', 'edit', 'view'
  const [selectedPatient, setSelectedPatient] = useState(null);
  const itemsPerPage = 10;

  // Form data state
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    cccd: '',
    bhyt: '',
    email: '',
    address: '',
    dateOfBirth: '',
    gender: 'male',
    type: 'bhyt'
  });

  // Sample patient data
  const [patients, setPatients] = useState([
    {
      id: 1,
      patientName: 'DƯƠNG VĂN TÚ',
      phone: '0393264758',
      cccd: '036305002145',
      bhyt: 'HS4010370024567',
      email: 'duongvantu@gmail.com',
      address: '123 Đường ABC, Quận 1, TP.HCM',
      dateOfBirth: '1985-03-15',
      gender: 'male',
      type: 'bhyt',
      createdAt: '2025-08-20 10:30:00',
      status: 'active'
    },
    {
      id: 2,
      patientName: 'NGUYỄN THỊ LOAN',
      phone: '0912345678',
      cccd: '036305002146',
      bhyt: '',
      email: 'nguyenthiloan@gmail.com',
      address: '456 Đường XYZ, Quận 2, TP.HCM',
      dateOfBirth: '1990-07-22',
      gender: 'female',
      type: 'service',
      createdAt: '2025-08-19 14:15:00',
      status: 'active'
    },
    {
      id: 3,
      patientName: 'TRẦN VĂN MINH',
      phone: '0987654321',
      cccd: '036305002147',
      bhyt: 'HS4010370024568',
      email: 'tranvanminh@gmail.com',
      address: '789 Đường DEF, Quận 3, TP.HCM',
      dateOfBirth: '1975-11-08',
      gender: 'male',
      type: 'bhyt',
      createdAt: '2025-08-18 09:20:00',
      status: 'active'
    },
    {
      id: 4,
      patientName: 'LÊ THỊ HOA',
      phone: '0901234567',
      cccd: '036305002148',
      bhyt: '',
      email: 'lethihoa@gmail.com',
      address: '321 Đường GHI, Quận 4, TP.HCM',
      dateOfBirth: '1988-05-30',
      gender: 'female',
      type: 'service',
      createdAt: '2025-08-17 16:45:00',
      status: 'inactive'
    }
  ]);

  // Reset form
  const resetForm = () => {
    setFormData({
      patientName: '',
      phone: '',
      cccd: '',
      bhyt: '',
      email: '',
      address: '',
      dateOfBirth: '',
      gender: 'male',
      type: 'bhyt'
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Open modal for adding patient
  const handleAddPatient = () => {
    setModalMode('add');
    setSelectedPatient(null);
    resetForm();
    setShowModal(true);
  };

  // Open modal for editing patient
  const handleEditPatient = (patient) => {
    setModalMode('edit');
    setSelectedPatient(patient);
    setFormData({
      patientName: patient.patientName,
      phone: patient.phone,
      cccd: patient.cccd,
      bhyt: patient.bhyt,
      email: patient.email,
      address: patient.address,
      dateOfBirth: patient.dateOfBirth,
      gender: patient.gender,
      type: patient.type
    });
    setShowModal(true);
  };

  // Open modal for viewing patient
  const handleViewPatient = (patient) => {
    setModalMode('view');
    setSelectedPatient(patient);
    setFormData({
      patientName: patient.patientName,
      phone: patient.phone,
      cccd: patient.cccd,
      bhyt: patient.bhyt,
      email: patient.email,
      address: patient.address,
      dateOfBirth: patient.dateOfBirth,
      gender: patient.gender,
      type: patient.type
    });
    setShowModal(true);
  };

  // Handle save patient
  const handleSavePatient = () => {
    if (modalMode === 'add') {
      const newPatient = {
        id: Math.max(...patients.map(p => p.id)) + 1,
        ...formData,
        createdAt: new Date().toISOString().replace('T', ' ').slice(0, 19),
        status: 'active'
      };
      setPatients([...patients, newPatient]);
    } else if (modalMode === 'edit') {
      setPatients(patients.map(p => 
        p.id === selectedPatient.id 
          ? { ...p, ...formData }
          : p
      ));
    }
    setShowModal(false);
    resetForm();
  };

  // Handle delete patient
  const handleDeletePatient = (patientId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa bệnh nhân này?')) {
      setPatients(patients.filter(p => p.id !== patientId));
    }
  };

  // Get type badge
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

  // Get status badge
  const getStatusBadge = (status) => {
    return status === 'active' ? (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        <CheckCircle className="w-3 h-3 mr-1" />
        Hoạt động
      </span>
    ) : (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
        <AlertCircle className="w-3 h-3 mr-1" />
        Ngừng hoạt động
      </span>
    );
  };

  // Filter data
  const filteredData = patients.filter(patient => {
    const matchesTab = activeTab === 'all' || patient.type === activeTab;
    const matchesSearch = patient.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         patient.phone.includes(searchTerm) ||
                         patient.cccd.includes(searchTerm) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !typeFilter || patient.type === typeFilter;
    
    return matchesTab && matchesSearch && matchesType;
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Stats
  const stats = {
    total: patients.length,
    bhyt: patients.filter(p => p.type === 'bhyt').length,
    service: patients.filter(p => p.type === 'service').length,
    active: patients.filter(p => p.status === 'active').length,
    inactive: patients.filter(p => p.status === 'inactive').length
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý Bệnh nhân</h1>
          <p className="text-gray-600 mt-1">Quản lý thông tin bệnh nhân BHYT và dịch vụ</p>
        </div>
        <button
          onClick={handleAddPatient}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Thêm bệnh nhân</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tổng số</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <Users className="h-8 w-8 text-gray-400" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">BHYT</p>
              <p className="text-2xl font-bold text-blue-600">{stats.bhyt}</p>
            </div>
            <CreditCard className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Dịch vụ</p>
              <p className="text-2xl font-bold text-purple-600">{stats.service}</p>
            </div>
            <FileText className="h-8 w-8 text-purple-400" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Hoạt động</p>
              <p className="text-2xl font-bold text-green-600">{stats.active}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ngừng hoạt động</p>
              <p className="text-2xl font-bold text-red-600">{stats.inactive}</p>
            </div>
            <AlertCircle className="h-8 w-8 text-red-400" />
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
              placeholder="Tìm kiếm theo tên, SĐT, CCCD, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Tất cả loại</option>
            <option value="bhyt">BHYT</option>
            <option value="service">Dịch vụ</option>
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
                  Liên hệ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loại
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Giới tính
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày sinh
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày tạo
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-900">{patient.patientName}</div>
                      <div className="text-sm text-gray-500">CCCD: {patient.cccd}</div>
                      {patient.bhyt && <div className="text-sm text-gray-500">BHYT: {patient.bhyt}</div>}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="flex items-center text-sm text-gray-900">
                        <Phone className="h-4 w-4 mr-1 text-gray-400" />
                        {patient.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail className="h-4 w-4 mr-1 text-gray-400" />
                        {patient.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getTypeBadge(patient.type)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.gender === 'male' ? 'Nam' : 'Nữ'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.dateOfBirth}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(patient.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {patient.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button 
                        onClick={() => handleViewPatient(patient)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded" 
                        title="Xem chi tiết"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleEditPatient(patient)}
                        className="text-green-600 hover:text-green-900 p-1 rounded" 
                        title="Chỉnh sửa"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDeletePatient(patient.id)}
                        className="text-red-600 hover:text-red-900 p-1 rounded" 
                        title="Xóa"
                      >
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {modalMode === 'add' && 'Thêm bệnh nhân mới'}
                {modalMode === 'edit' && 'Chỉnh sửa bệnh nhân'}
                {modalMode === 'view' && 'Thông tin bệnh nhân'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Patient Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Họ và tên *</label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  disabled={modalMode === 'view'}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  placeholder="Nhập họ và tên"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Số điện thoại *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={modalMode === 'view'}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              {/* CCCD */}
              <div>
                <label className="block text-sm font-medium text-gray-700">CCCD/CMND *</label>
                <input
                  type="text"
                  name="cccd"
                  value={formData.cccd}
                  onChange={handleInputChange}
                  disabled={modalMode === 'view'}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  placeholder="Nhập số CCCD/CMND"
                />
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Loại bệnh nhân *</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  disabled={modalMode === 'view'}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                >
                  <option value="bhyt">BHYT</option>
                  <option value="service">Dịch vụ</option>
                </select>
              </div>

              {/* BHYT (only show if type is bhyt) */}
              {formData.type === 'bhyt' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Số thẻ BHYT</label>
                  <input
                    type="text"
                    name="bhyt"
                    value={formData.bhyt}
                    onChange={handleInputChange}
                    disabled={modalMode === 'view'}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                    placeholder="Nhập số thẻ BHYT"
                  />
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={modalMode === 'view'}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  placeholder="Nhập email"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Ngày sinh</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  disabled={modalMode === 'view'}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Giới tính</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  disabled={modalMode === 'view'}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                >
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </select>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  disabled={modalMode === 'view'}
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  placeholder="Nhập địa chỉ"
                />
              </div>
            </div>

            {/* Modal Actions */}
            {modalMode !== 'view' && (
              <div className="flex justify-end space-x-3 mt-6 pt-4 border-t">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Hủy
                </button>
                <button
                  onClick={handleSavePatient}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>{modalMode === 'add' ? 'Thêm' : 'Cập nhật'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientManagement;