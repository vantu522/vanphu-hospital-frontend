import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle, Clock, Download } from "lucide-react";
import TableBase from "../../components/admin/table/table";
import { createRecruitment, deleteRecruitment, getAllRecruitments, updateRecruitment } from "../../services/client/recruitments";
import LoadingSpinner from "../../components/admin/ui/loading";
import toast from "react-hot-toast";
import { createApplication, deleteApplication, getAllApplications, updateApplication,downloadCV } from "../../services/client/application";
const RecruitmentManagement = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const[loading, setLoading] = useState(false);
  const [applications, setApplications] = useState([]);

  // Mock data for recruitment posts
  const [recruitmentPosts, setRecruitmentPosts] = useState([]);
  useEffect(() => {
    const fetchRecruitments = async () => {
      try {
        const data = await getAllRecruitments();
        console.log(data);
        setRecruitmentPosts(data);
      } catch (error) {
        console.error("Lỗi khi load danh sách tuyển dụng:", error);
      }
    };
    const fetchApplications = async () =>{
      try{
        const data = await getAllApplications();
        console.log("Hồ sơ tuyển dụng: ",data)
        setApplications(data)
      }catch (error) {
        console.error("Lỗi khi load danh sách tuyển dụng:", error);
      }
    }
    fetchApplications();

    fetchRecruitments();
  }, []);

  

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Columns for recruitment posts table
  const postColumns = [
    {
      key: "title",
      label: "Tiêu đề",
    },
    {
      key: "document",
      label: "Tệp đính kèm",
      render: (value) =>
        value ? (
          <a
            href={`http://localhost:5000/${value}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Xem tài liệu
          </a>
        ) : (
          <span className="text-gray-400 text-sm">Không có</span>
        ),
    },
    {
      key: "createdAt",
      label: "Ngày tạo",
      render: (value) => formatDate(value),
    },
    {
      key: "expiry_date",
      label: "Ngày hết hạn",
      render: (value) => formatDate(value),
    },
  ];

  // Form fields for recruitment posts
  const postFormFields = [
    {
      key: "title",
      label: "Tiêu đề",
      type: "text",
      required: true,
      placeholder: "Nhập tiêu đề bài đăng",
    },
    {
      key: "document",
      label: "Tệp PDF",
      type: "file",
      accept: "application/pdf",
    },
    {
      key: "expiry_date",
      label: "Ngày hết hạn",
      type: "date",
    },
  ];
    // Handle functions for recruitment posts
  const handleAddPost = async  (formData) => {
     try {
      setLoading(true);
      const result = await createRecruitment(formData);
      setRecruitmentPosts([...recruitmentPosts, result]);
      toast.success("Tạo tin tức  thành công!");
    } catch (error) {
      toast.error("Tạo tin tức thất bại!");
    } finally {
      setLoading(false);
    }
  };

const handleEditPost = async (id, formData) => {
      try{
        setLoading(true)
        const updatedPost= await updateRecruitment(id, formData);
        setRecruitmentPosts(recruitmentPosts.map((item) => (item._id === id ? updatedPost : item)));
        toast.success("Dịch vụ đã được cập nhật thành công!");
      }
      catch (error) {
        console.error("Failed to update service:", error);
        toast.error("Cập nhật dịch vụ thất bại!");
      } finally{
        setLoading(false)
      }
  };

 const handleDeletePost = async (id) => {
    try {
      setLoading(true)
      await deleteRecruitment(id);
      setRecruitmentPosts(recruitmentPosts.filter((item) => item._id !== id));
      toast.success("Dịch vụ đã được xóa thành công!");
    } catch (error) {
      console.error("Failed to delete service:", error);
      toast.error("Xóa dịch vụ thất bại!");
    } finally{
      setLoading(false)
    }
  }
  const handleViewPost = (item) => {
    alert(`Viewing service: ${item.name}`);
  };





  // Columns for applications table
  const applicationColumns = [
    {
      key: "name",
      label: "Họ tên",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "phone",
      label: "Số điện thoại",
    },
    {
      key: "coverLetter",
      label: "Thư xin việc",
      truncate: true,
      truncateLength: 80,
    },
   {
  key: "cvFileUrl",
  label: "CV",
  render: (value, item) => (
    <button
      onClick={() => downloadCV(item._id)}
      className="flex items-center text-blue-600 hover:text-blue-900"
    >
      <Download className="w-4 h-4 mr-1" />
      Tải CV
    </button>
  ),
}
,
   {
  key: "status",
  label: "Trạng thái",
  type: "badge",
  render: (value) => {
    const statusConfig = {
      pending: {
        color: "bg-yellow-100 text-yellow-800",
        icon: Clock,
        text: "Chờ duyệt",
      },
      approved: {
        color: "bg-green-100 text-green-800",
        icon: CheckCircle,
        text: "Đã duyệt",
      },
      rejected: {
        color: "bg-red-100 text-red-800",
        icon: XCircle,
        text: "Từ chối",
      },
    };

    const config = statusConfig[value?.toLowerCase?.()];

    if (!config) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          Không xác định
        </span>
      );
    }

    const Icon = config.icon;
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}
      >
        <Icon className="w-3 h-3 mr-1" />
        {config.text}
      </span>
    );
  },
},

    {
      key: "createdAt",
      label: "Ngày nộp",
      render: (value) => formatDate(value),
    },
  ];

  // Form fields for applications
  const applicationFormFields = [
    {
      key: "name",
      label: "Họ tên",
      type: "text",
      required: true,
      placeholder: "Nhập họ tên",
    },
    {
      key: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Nhập email",
    },
    {
      key: "phone",
      label: "Số điện thoại",
      type: "tel",
      required: true,
      placeholder: "Nhập số điện thoại",
    },
    {
      key: "coverLetter",
      label: "Thư xin việc",
      type: "textarea",
      placeholder: "Nhập thư xin việc",
    },
    {
      key: "cvFileUrl",
      label: "CV File",
      type: "file",
      accept: "application/pdf",

    },
    {
      key: "status",
      label: "Trạng thái",
      type: "select",
      options: [
        { value: "pending", label: "Chờ duyệt" },
        { value: "approved", label: "Đã duyệt" },
        { value: "rejected", label: "Từ chối" },
      ],
      defaultValue: "pending",
    },
  ];



  // Handle functions for applications
  const handleAddApplication = async (formData) => {
         try {
      setLoading(true);
      const result = await createApplication(formData);
      setApplications([...applications, result]);
      toast.success("Tạo tin tức  thành công!");
    } catch (error) {
      toast.error("Tạo tin tức thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleEditApplication = async(id, formData) => {
       try{
        setLoading(true)
        const updatedApp= await updateApplication(id, formData);
        setApplications(applications.map((item) => (item._id === id ? updatedApp : item)));
        toast.success("Dịch vụ đã được cập nhật thành công!");
      }
      catch (error) {
        console.error("Failed to update service:", error);
        toast.error("Cập nhật dịch vụ thất bại!");
      } finally{
        setLoading(false)
      }
  };

  const handleDeleteApplication = async (id) => {
     try {
      setLoading(true)
      await deleteApplication(id);
      setApplications(applications.filter((item) => item._id !== id));
      toast.success("Dịch vụ đã được xóa thành công!");
    } catch (error) {
      console.error("Failed to delete service:", error);
      toast.error("Xóa dịch vụ thất bại!");
    } finally{
      setLoading(false)
    }
  };

  const handleViewApplication = (application) => {
    alert(`Xem chi tiết ứng viên: ${application.name}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Quản lý Tuyển dụng
        </h1>
        <p className="text-gray-600">
          Quản lý các bài đăng tuyển dụng và hồ sơ ứng tuyển
        </p>
      </div>

      {/* Tabs */}
      {loading && <LoadingSpinner/>}
      <div className="mb-6">
        <div className="border-b border-gray-200 bg-white rounded-t-lg">
          <nav className="-mb-px flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("posts")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "posts"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Bài đăng tuyển dụng ({recruitmentPosts.length})
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "applications"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Hồ sơ ứng tuyển ({applications.length})
            </button>
          </nav>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === "posts" ? (
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
