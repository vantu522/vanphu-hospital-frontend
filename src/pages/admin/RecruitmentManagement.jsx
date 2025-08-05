import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Briefcase, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Download,
  Plus,
  RefreshCw,
  Calendar,
  MapPin,
  GraduationCap,
  Award,
  Clock,
  Building,
  Star,
  UserCheck,
  UserX,
  MessageSquare,
  Send
} from 'lucide-react';

const RecruitmentManagement = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      candidateName: "Nguyễn Thị Lan",
      phone: "0123456789",
      email: "lan.nguyen@email.com",
      position: "Bác sĩ Nội khoa",
      department: "Khoa Nội Tổng Hợp",
      experience: "5 năm",
      education: "Bác sĩ Đa khoa - ĐH Y Hà Nội",
      location: "Hà Nội",
      salary: "25-30 triệu",
      status: "pending",
      appliedDate: "2025-08-01",
      interviewDate: "",
      rating: 0,
      notes: "",
      skills: ["Khám nội khoa", "Siêu âm", "Điện tim"],
      cvUrl: "/cv/nguyen-thi-lan.pdf"
    },
    {
      id: 2,
      candidateName: "Trần Văn Minh",
      phone: "0987654321",
      email: "minh.tran@email.com",
      position: "Y tá",
      department: "Khoa Cấp cứu",
      experience: "3 năm",
      education: "Cử nhân Điều dưỡng - ĐH Y Dược TP.HCM",
      location: "TP.HCM",
      salary: "12-15 triệu",
      status: "interview_scheduled",
      appliedDate: "2025-07-28",
      interviewDate: "2025-08-06",
      rating: 4,
      notes: "Ứng viên có kinh nghiệm tốt tại khoa cấp cứu",
      skills: ["Cấp cứu", "Tiêm truyền", "Chăm sóc bệnh nhân"],
      cvUrl: "/cv/tran-van-minh.pdf"
    },
    {
      id: 3,
      candidateName: "Lê Thị Hương",
      phone: "0369852147",
      email: "huong.le@email.com",
      position: "Dược sĩ",
      department: "Khoa Dược",
      experience: "2 năm",
      education: "Dược sĩ Đại học - ĐH Dược Hà Nội",
      location: "Hà Nội",
      salary: "15-18 triệu",
      status: "approved",
      appliedDate: "2025-07-25",
      interviewDate: "2025-08-03",
      rating: 5,
      notes: "Ứng viên xuất sắc, được nhận vào làm",
      skills: ["Pha chế thuốc", "Tư vấn dược", "Quản lý kho"],
      cvUrl: "/cv/le-thi-huong.pdf"
    },
    {
      id: 4,
      candidateName: "Phạm Văn Đức",
      phone: "0456789123",
      email: "duc.pham@email.com",
      position: "Kỹ thuật viên X-quang",
      department: "Khoa Chẩn đoán hình ảnh",
      experience: "4 năm",
      education: "Cao đẳng Y tế - Trường CĐ Y tế Hà Nội",
      location: "Hà Nội",
      salary: "10-12 triệu",
      status: "rejected",
      appliedDate: "2025-07-20",
      interviewDate: "2025-07-30",
      rating: 2,
      notes: "Không đáp ứng yêu cầu về kỹ năng chuyên môn",
      skills: ["X-quang", "CT", "MRI"],
      cvUrl: "/cv/pham-van-duc.pdf"
    },
    {
      id: 5,
      candidateName: "Võ Thị Mai",
      phone: "0789123456",
      email: "mai.vo@email.com",
      position: "Nhân viên IT",
      department: "Phòng Công nghệ thông tin",
      experience: "1 năm",
      education: "Kỹ sư CNTT - ĐH Bách khoa Hà Nội",
      location: "Hà Nội",
      salary: "15-20 triệu",
      status: "pending",
      appliedDate: "2025-08-02",
      interviewDate: "",
      rating: 0,
      notes: "",
      skills: ["Java", "React", "Database", "Hệ thống HIS"],
      cvUrl: "/cv/vo-thi-mai.pdf"
    }
  ]);

  const [jobPositions, setJobPositions] = useState([
    {
      id: 1,
      title: "Bác sĩ Nội khoa",
      department: "Khoa Nội Tổng Hợp",
      quantity: 2,
      applications: 5,
      status: "active",
      deadline: "2025-08-15",
      salary: "25-30 triệu"
    },
    {
      id: 2,
      title: "Y tá",
      department: "Khoa Cấp cứu",
      quantity: 3,
      applications: 8,
      status: "active",
      deadline: "2025-08-20",
      salary: "12-15 triệu"
    },
    {
      id: 3,
      title: "Dược sĩ",
      department: "Khoa Dược",
      quantity: 1,
      applications: 3,
      status: "closed",
      deadline: "2025-08-05",
      salary: "15-18 triệu"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [positionFilter, setPositionFilter] = useState("all");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("view");
  const [activeTab, setActiveTab] = useState("applications");

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    interview_scheduled: "bg-blue-100 text-blue-800 border-blue-200",
    approved: "bg-green-100 text-green-800 border-green-200",
    rejected: "bg-red-100 text-red-800 border-red-200"
  };

  const statusLabels = {
    pending: "Chờ xử lý",
    interview_scheduled: "Đã hẹn phỏng vấn",
    approved: "Được chấp nhận",
    rejected: "Bị từ chối"
  };

  const jobStatusColors = {
    active: "bg-green-100 text-green-800 border-green-200",
    closed: "bg-gray-100 text-gray-800 border-gray-200",
    paused: "bg-yellow-100 text-yellow-800 border-yellow-200"
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.phone.includes(searchTerm) ||
                         app.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    const matchesPosition = positionFilter === "all" || app.position === positionFilter;
    
    return matchesSearch && matchesStatus && matchesPosition;
  });

  const handleStatusChange = (appId, newStatus) => {
    setApplications(applications.map(app => 
      app.id === appId ? { ...app, status: newStatus } : app
    ));
  };

  const handleDeleteApplication = (appId) => {
    setApplications(applications.filter(app => app.id !== appId));
  };

  const openModal = (application, type) => {
    setSelectedApplication(application);
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedApplication(null);
  };

  const getApplicationStats = () => {
    return {
      total: applications.length,
      pending: applications.filter(app => app.status === 'pending').length,
      interview_scheduled: applications.filter(app => app.status === 'interview_scheduled').length,
      approved: applications.filter(app => app.status === 'approved').length,
      rejected: applications.filter(app => app.status === 'rejected').length
    };
  };

  const stats = getApplicationStats();

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Tuyển Dụng</h1>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Download size={20} />
              Xuất Báo Cáo
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus size={20} />
              Tạo Tin Tuyển Dụng
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <RefreshCw size={20} />
              Làm Mới
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("applications")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "applications"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Hồ Sơ Ứng Tuyển
              </button>
              <button
                onClick={() => setActiveTab("positions")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "positions"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Vị Trí Tuyển Dụng
              </button>
            </nav>
          </div>
        </div>

        {activeTab === "applications" && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Tổng số hồ sơ</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                  </div>
                  <Users className="text-gray-400" size={24} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Chờ xử lý</p>
                    <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
                  </div>
                  <AlertCircle className="text-yellow-400" size={24} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Hẹn phỏng vấn</p>
                    <p className="text-2xl font-bold text-blue-600">{stats.interview_scheduled}</p>
                  </div>
                  <Calendar className="text-blue-400" size={24} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Được chấp nhận</p>
                    <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
                  </div>
                  <UserCheck className="text-green-400" size={24} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Bị từ chối</p>
                    <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
                  </div>
                  <UserX className="text-red-400" size={24} />
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Tìm kiếm theo tên, số điện thoại, vị trí..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">Tất cả trạng thái</option>
                    <option value="pending">Chờ xử lý</option>
                    <option value="interview_scheduled">Hẹn phỏng vấn</option>
                    <option value="approved">Được chấp nhận</option>
                    <option value="rejected">Bị từ chối</option>
                  </select>
                </div>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    value={positionFilter}
                    onChange={(e) => setPositionFilter(e.target.value)}
                  >
                    <option value="all">Tất cả vị trí</option>
                    {[...new Set(applications.map(app => app.position))].map(position => (
                      <option key={position} value={position}>{position}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setStatusFilter("all");
                      setPositionFilter("all");
                    }}
                    className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Xóa bộ lọc
                  </button>
                </div>
              </div>
            </div>

            {/* Applications Table */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ứng viên
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vị trí/Khoa
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Kinh nghiệm
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trạng thái
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Đánh giá
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ngày ứng tuyển
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredApplications.map((application) => (
                      <tr key={application.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <User className="text-gray-400 mr-3" size={20} />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{application.candidateName}</div>
                              <div className="text-sm text-gray-500 flex items-center mt-1">
                                <Phone size={12} className="mr-1" />
                                {application.phone}
                              </div>
                              <div className="text-sm text-gray-500 flex items-center mt-1">
                                <Mail size={12} className="mr-1" />
                                {application.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{application.position}</div>
                          <div className="text-sm text-gray-500">{application.department}</div>
                          <div className="text-sm text-green-600 font-medium">{application.salary}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{application.experience}</div>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <GraduationCap size={12} className="mr-1" />
                            {application.education.split(' - ')[0]}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <MapPin size={12} className="mr-1" />
                            {application.location}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[application.status]}`}>
                            {statusLabels[application.status]}
                          </span>
                          {application.interviewDate && (
                            <div className="text-xs text-gray-500 mt-1 flex items-center">
                              <Calendar size={10} className="mr-1" />
                              PV: {application.interviewDate}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {renderStars(application.rating)}
                            {application.rating > 0 && (
                              <span className="ml-2 text-sm text-gray-500">({application.rating}/5)</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 flex items-center">
                            <Calendar className="text-gray-400 mr-2" size={16} />
                            {application.appliedDate}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => openModal(application, 'view')}
                              className="text-blue-600 hover:text-blue-900 p-1 rounded"
                              title="Xem chi tiết"
                            >
                              <Eye size={16} />
                            </button>
                            <button
                              onClick={() => openModal(application, 'edit')}
                              className="text-green-600 hover:text-green-900 p-1 rounded"
                              title="Chỉnh sửa"
                            >
                              <Edit size={16} />
                            </button>
                            {application.status === 'pending' && (
                              <button
                                onClick={() => handleStatusChange(application.id, 'interview_scheduled')}
                                className="text-blue-600 hover:text-blue-900 p-1 rounded"
                                title="Hẹn phỏng vấn"
                              >
                                <Calendar size={16} />
                              </button>
                            )}
                            {application.status === 'interview_scheduled' && (
                              <>
                                <button
                                  onClick={() => handleStatusChange(application.id, 'approved')}
                                  className="text-green-600 hover:text-green-900 p-1 rounded"
                                  title="Chấp nhận"
                                >
                                  <UserCheck size={16} />
                                </button>
                                <button
                                  onClick={() => handleStatusChange(application.id, 'rejected')}
                                  className="text-red-600 hover:text-red-900 p-1 rounded"
                                  title="Từ chối"
                                >
                                  <UserX size={16} />
                                </button>
                              </>
                            )}
                            <button
                              className="text-purple-600 hover:text-purple-900 p-1 rounded"
                              title="Gửi email"
                            >
                              <Send size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteApplication(application.id)}
                              className="text-red-600 hover:text-red-900 p-1 rounded"
                              title="Xóa"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {filteredApplications.length === 0 && (
                <div className="text-center py-12">
                  <Users className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500">Không tìm thấy hồ sơ ứng tuyển nào phù hợp với bộ lọc</p>
                </div>
              )}
            </div>
          </>
        )}

        {activeTab === "positions" && (
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Danh Sách Vị Trí Tuyển Dụng</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vị trí
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Khoa
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Số lượng
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ứng tuyển
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hạn nộp
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mức lương
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trạng thái
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jobPositions.map((position) => (
                    <tr key={position.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Briefcase className="text-gray-400 mr-3" size={20} />
                          <div className="text-sm font-medium text-gray-900">{position.title}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{position.department}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{position.quantity} người</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-blue-600">{position.applications} hồ sơ</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <Clock className="text-gray-400 mr-2" size={16} />
                          {position.deadline}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-green-600">{position.salary}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${jobStatusColors[position.status]}`}>
                          {position.status === "active"
                            ? "Đang tuyển"
                            : position.status === "closed"
                            ? "Đã đóng"
                            : "Tạm dừng"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <button
                            className="text-blue-600 hover:text-blue-900 p-1 rounded"
                            title="Xem chi tiết"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            className="text-green-600 hover:text-green-900 p-1 rounded"
                            title="Chỉnh sửa"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-900 p-1 rounded"
                            title="Xóa"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {jobPositions.length === 0 && (
                <div className="text-center py-12">
                  <Briefcase className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500">Không có vị trí tuyển dụng nào</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecruitmentManagement;
