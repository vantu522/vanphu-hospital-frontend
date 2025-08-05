import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Clock, Download } from 'lucide-react';
import TableBase from '../../components/admin/table/table';

const RecruitmentManagement = () => {
  const [activeTab, setActiveTab] = useState('posts');
  
  // Mock data for recruitment posts
  const [recruitmentPosts, setRecruitmentPosts] = useState([
    {
      _id: '1',
      title: 'Tuyển dụng Developer React.js',
      documentImages: ['image1.jpg', 'image2.jpg'],
      createdAt: '2024-01-15T08:30:00Z',
      updatedAt: '2024-01-16T10:15:00Z'
    },
    {
      _id: '2',
      title: 'Tuyển dụng Marketing Manager',
      documentImages: ['marketing.jpg'],
      createdAt: '2024-01-14T09:00:00Z',
      updatedAt: '2024-01-14T09:00:00Z'
    },
    {
      _id: '3',
      title: 'Tuyển dụng UI/UX Designer',
      documentImages: [],
      createdAt: '2024-01-13T14:20:00Z',
      updatedAt: '2024-01-15T11:30:00Z'
    }
  ]);

  // Mock data for applications
  const [applications, setApplications] = useState([
    {
      _id: '1',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0123456789',
      coverLetter: 'Tôi có 3 năm kinh nghiệm trong lĩnh vực React.js và đã làm việc với nhiều dự án lớn...',
      cvFileUrl: 'cv_nguyenvana.pdf',
      status: 'pending',
      createdAt: '2024-01-16T10:30:00Z'
    },
    {
      _id: '2',
      name: 'Trần Thị B',
      email: 'tranthib@gmail.com',
      phone: '0987654321',
      coverLetter: 'Tôi rất quan tâm đến vị trí Marketing Manager và tin rằng kinh nghiệm của tôi...',
      cvFileUrl: 'cv_tranthib.pdf',
      status: 'approved',
      createdAt: '2024-01-15T14:20:00Z'
    },
    {
      _id: '3',
      name: 'Lê Văn C',
      email: 'levanc@gmail.com',
      phone: '0369852147',
      coverLetter: 'Với kinh nghiệm 2 năm trong thiết kế UI/UX, tôi tự tin có thể đóng góp...',
      cvFileUrl: 'cv_levanc.pdf',
      status: 'rejected',
      createdAt: '2024-01-14T16:45:00Z'
    }
  ]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Columns for recruitment posts table
  const postColumns = [
    {
      key: 'title',
      label: 'Tiêu đề',
    },
    {
      key: 'documentImages',
      label: 'Hình ảnh',
      render: (value) => (
        <div>
          {value && value.length > 0 ? (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              {value.length} ảnh
            </span>
          ) : (
            <span className="text-gray-400">Không có ảnh</span>
          )}
        </div>
      )
    },
    {
      key: 'createdAt',
      label: 'Ngày tạo',
      render: (value) => formatDate(value)
    },
    {
      key: 'updatedAt',
      label: 'Cập nhật lần cuối',
      render: (value) => formatDate(value)
    }
  ];

  // Form fields for recruitment posts
  const postFormFields = [
    {
      name: 'title',
      label: 'Tiêu đề',
      type: 'text',
      required: true,
      placeholder: 'Nhập tiêu đề bài đăng'
    },
    {
      name: 'documentImages',
      label: 'Hình ảnh',
      type: 'file',
      multiple: true,
      accept: 'image/*'
    }
  ];

  // Columns for applications table
  const applicationColumns = [
    {
      key: 'name',
      label: 'Họ tên',
    },
    {
      key: 'email',
      label: 'Email',
    },
    {
      key: 'phone',
      label: 'Số điện thoại',
    },
    {
      key: 'coverLetter',
      label: 'Thư xin việc',
      truncate: true,
      truncateLength: 80,
    },
    {
      key: 'cvFileUrl',
      label: 'CV',
      render: (value) => (
        <div>
          {value ? (
            <button className="flex items-center text-blue-600 hover:text-blue-900">
              <Download className="w-4 h-4 mr-1" />
              Tải CV
            </button>
          ) : (
            <span className="text-gray-400">Không có CV</span>
          )}
        </div>
      )
    },
    {
      key: 'status',
      label: 'Trạng thái',
      type: 'badge',
      render: (value) => {
        const statusConfig = {
          pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock, text: 'Chờ duyệt' },
          approved: { color: 'bg-green-100 text-green-800', icon: CheckCircle, text: 'Đã duyệt' },
          rejected: { color: 'bg-red-100 text-red-800', icon: XCircle, text: 'Từ chối' }
        };
        
        const config = statusConfig[value];
        const Icon = config.icon;
        
        return (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
            <Icon className="w-3 h-3 mr-1" />
            {config.text}
          </span>
        );
      }
    },
    {
      key: 'createdAt',
      label: 'Ngày nộp',
      render: (value) => formatDate(value)
    }
  ];

  // Form fields for applications
  const applicationFormFields = [
    {
      name: 'name',
      label: 'Họ tên',
      type: 'text',
      required: true,
      placeholder: 'Nhập họ tên'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'Nhập email'
    },
    {
      name: 'phone',
      label: 'Số điện thoại',
      type: 'tel',
      required: true,
      placeholder: 'Nhập số điện thoại'
    },
    {
      name: 'coverLetter',
      label: 'Thư xin việc',
      type: 'textarea',
      placeholder: 'Nhập thư xin việc'
    },
    {
      name: 'cvFileUrl',
      label: 'CV File',
      type: 'file',
      accept: '.pdf,.doc,.docx'
    },
    {
      name: 'status',
      label: 'Trạng thái',
      type: 'select',
      options: [
        { value: 'pending', label: 'Chờ duyệt' },
        { value: 'approved', label: 'Đã duyệt' },
        { value: 'rejected', label: 'Từ chối' }
      ],
      defaultValue: 'pending'
    }
  ];

  // Handle functions for recruitment posts
  const handleAddPost = (formData) => {
    const newPost = {
      _id: Date.now().toString(),
      ...formData,
      documentImages: formData.documentImages || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setRecruitmentPosts(prev => [...prev, newPost]);
  };

  const handleEditPost = (id, formData) => {
    setRecruitmentPosts(prev => 
      prev.map(post => 
        post._id === id 
          ? { ...post, ...formData, updatedAt: new Date().toISOString() }
          : post
      )
    );
  };

  const handleDeletePost = (id) => {
    setRecruitmentPosts(prev => prev.filter(post => post._id !== id));
  };

  const handleViewPost = (post) => {
    alert(`Xem chi tiết bài đăng: ${post.title}`);
  };

  // Handle functions for applications
  const handleAddApplication = (formData) => {
    const newApplication = {
      _id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString()
    };
    setApplications(prev => [...prev, newApplication]);
  };

  const handleEditApplication = (id, formData) => {
    setApplications(prev => 
      prev.map(app => 
        app._id === id ? { ...app, ...formData } : app
      )
    );
  };

  const handleDeleteApplication = (id) => {
    setApplications(prev => prev.filter(app => app._id !== id));
  };

  const handleViewApplication = (application) => {
    alert(`Xem chi tiết ứng viên: ${application.name}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Quản lý Tuyển dụng</h1>
        <p className="text-gray-600">Quản lý các bài đăng tuyển dụng và hồ sơ ứng tuyển</p>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200 bg-white rounded-t-lg">
          <nav className="-mb-px flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('posts')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'posts'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Bài đăng tuyển dụng ({recruitmentPosts.length})
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'applications'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Hồ sơ ứng tuyển ({applications.length})
            </button>
          </nav>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'posts' ? (
        <TableBase
          data={recruitmentPosts}
          columns={postColumns}
          formFields={postFormFields}
          title="Quản lý Bài đăng Tuyển dụng"
          onAdd={handleAddPost}
          onEdit={handleEditPost}
          onDelete={handleDeletePost}
          onView={handleViewPost}
          actions={{ add: true, edit: true, delete: true, view: true }}
          searchable={true}
          paginated={true}
          pageSize={10}
        />
      ) : (
        <TableBase
          data={applications}
          columns={applicationColumns}
          formFields={applicationFormFields}
          title="Quản lý Hồ sơ Ứng tuyển"
          onAdd={handleAddApplication}
          onEdit={handleEditApplication}
          onDelete={handleDeleteApplication}
          onView={handleViewApplication}
          actions={{ add: true, edit: true, delete: true, view: true }}
          searchable={true}
          paginated={true}
          pageSize={10}
        />
      )}
    </div>
  );
};

export default RecruitmentManagement;