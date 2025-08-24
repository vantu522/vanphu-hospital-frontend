import { TableBase } from "../../components/admin/table/table";
import React, { useState, useEffect } from "react";
import {
  getAllDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../../services/client/doctors";
import { getAllSpecialties } from "../../services/client/specialties";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/admin/ui/loading";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [specialty, setSpecialty] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await getAllDoctors();
        setDoctors(response);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      } finally{
        setLoading(false);
      }
    };
      const fetchSpecialties = async () => {
      try {
        const data = await getAllSpecialties();
        setSpecialty(data.map((item) => ({
          value: item._id,  // value là id
          label: item.name  // hiển thị tên
        })));
      } catch (error) {
        console.error("Failed to fetch specialties:", error);
      }
    };
    fetchDoctors();
    fetchSpecialties();
  }, []);

  const columns = [
    { key: "full_name", label: "Họ tên" },
      {
      key: "specialties",
      label: "Chuyên khoa",
      render: (val) => {
        // Nếu val là object có name thì hiển thị name
        if (val && typeof val === 'object' && val.name) {
          return val.name;
        }
        // Nếu val là string (ID), tìm tên từ specialty array
        if (val && typeof val === 'string') {
          const foundSpecialty = specialty.find(s => s.value === val);
          return foundSpecialty ? foundSpecialty.label : "N/A";
        }
        return "N/A";
      }
    },
    
    { key: "degree", label: "Học vị" },
    // { key: "email", label: "Email" },
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
       {
      key: "specialties",  // thay specialties -> specialty
      label: "Chuyên khoa",
      type: "select",    // chuyển thành select
      options: specialty,
      required: true
    },
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
      
      // CÁCH 1: Enhance dữ liệu trả về với thông tin specialty
      if (updated.specialties && typeof updated.specialties === 'string') {
        const foundSpecialty = specialty.find(s => s.value === updated.specialties);
        if (foundSpecialty) {
          updated.specialties = {
            _id: updated.specialties,
            name: foundSpecialty.label
          };
        }
      }
      
      setDoctors(doctors.map((item) => (item._id === id ? updated : item)));
      toast.success("Cập nhật bác sĩ thành công!");
    } catch (error) {
      toast.error("Cập nhật bác sĩ thất bại!");
    } finally {
      setLoading(false);
    }
  };

  // CÁCH 2: Thêm function để refresh lại toàn bộ danh sách sau khi update
  const handleEditAlternative = async (id, formData) => {
    try {
      setLoading(true);
      await updateDoctor(id, formData);
      
      // Refresh lại toàn bộ danh sách để có đủ thông tin
      const response = await getAllDoctors();
      setDoctors(response);
      
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
        onEdit={handleEdit} // Hoặc dùng handleEditAlternative
        onDelete={handleDelete}
        onView={handleView}
        actions={{ add: true, edit: true, delete: true, view: true }}
      />
    </div>
  );
};

export default Doctors;