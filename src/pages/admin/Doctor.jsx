import { TableBase } from "../../components/admin/table/table";
import React, { useState, useEffect } from "react";
import {
  getAllDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../../services/client/doctors";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/admin/ui/loading";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await getAllDoctors();
        setDoctors(response);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  const columns = [
    { key: "full_name", label: "Họ tên" },
    { key: "specialties", label: "Chuyên khoa" },
    
    { key: "degree", label: "Học vị" },
    { key: "email", label: "Email" },
    { key: "phone_number", label: "SĐT" },
    // { key: "work_address", label: "Nơi làm việc" },
    // { key: "hospital", label: "Bệnh viện" },
    {
      key: "avatar",
      label: "Ảnh đại diện",
      render: (val) => (
        <img
          src={val}
          alt="Avatar"
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
      ),
    },
  ];

  const formFields = [
    { key: "avatar", label: "Ảnh đại diện", type: "file" },

    { key: "full_name", label: "Họ tên", type: "text", required: true },
    { key: "specialties", label: "Chuyên khoa", type: "text", required: true },
    {
      key: "expertise_fields",
      label: "Lĩnh vực chuyên môn",
      type: "tags",
      required: false,
    },
    { key: "degree", label: "Học vị", type: "text" },
    { key: "description", label: "Mô tả", type: "richtext" },
    { key: "hospital", label: "Bệnh viện", type: "text" },
  
   
    { key: "phone_number", label: "Số điện thoại", type: "text" },
    { key: "email", label: "Email", type: "email" },
    { key: "work_address", label: "Địa chỉ làm việc", type: "text" },
      {
      key: "experience",
      label: "Kinh nghiệm (nơi làm việc)",
      type: "tags",
    },
     {
      key: "certifications",
      label: "Chứng chỉ và giải thưởng",
      type: "tags",
    },
    {
      key:"training_process",
      label:"Quá trình đào tạo",
      type:"tags"
    },
  ];

  const handleAdd = async (formData) => {
    try {
      setLoading(true);
      const result = await createDoctor(formData);
      setDoctors([...doctors, result]);
      toast.success("Tạo bác sĩ thành công!");
    } catch (error) {
      toast.error("Tạo bác sĩ thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (id, formData) => {
    try {
      setLoading(true);
      const updated = await updateDoctor(id, formData);
      setDoctors(doctors.map((item) => (item._id === id ? updated : item)));
      toast.success("Cập nhật bác sĩ thành công!");
    } catch (error) {
      toast.error("Cập nhật bác sĩ thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteDoctor(id);
      setDoctors(doctors.filter((item) => item._id !== id));
      toast.success("Xóa bác sĩ thành công!");
    } catch (error) {
      toast.error("Xóa bác sĩ thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleView = (item) => {
    alert(`Xem thông tin bác sĩ: ${item.full_name}`);
  };

  return (
    <div className="p-6">
      {loading && <LoadingSpinner />}
      <TableBase
        data={doctors}
        columns={columns}
        formFields={formFields}
        title="Quản lý bác sĩ"
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        actions={{ add: true, edit: true, delete: true, view: true }}
      />
    </div>
  );
};

export default Doctors;
