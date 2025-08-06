import { TableBase } from "../../components/admin/table/table";
import React, { useState, useEffect } from "react";

import { createHealthConsultation,
      getAllHealthConsultations,
  updateHealthConsultation,
  deleteHealthConsultation,


 } from "../../services/client/health_consultation";
import { getAllSpecialties } from "../../services/client/specialties";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/admin/ui/loading";

const HealthConsultations = () => {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const response = await getAllHealthConsultations();
        setConsultations(response);
      } catch (error) {
        console.error("Failed to fetch health consultations:", error);
      }
    };

    const fetchSpecialties = async () => {
      try {
        const data = await getAllSpecialties();
        setSpecialties(
          data.map((item) => ({
            value: item._id, // ID của chuyên khoa
            label: item.name, // Hiển thị tên chuyên khoa
          }))
        );
      } catch (error) {
        console.error("Failed to fetch specialties:", error);
      }
    };

    fetchConsultations();
    fetchSpecialties();
  }, []);

  const columns = [
    { key: "title", label: "Tiêu đề" },
    {
      key: "specialty_id",
      label: "Chuyên khoa",
      render: (val) => val?.name || "N/A", // Hiển thị tên chuyên khoa
    },
    {
      key: "image",
      label: "Hình ảnh",
      render: (val) => (
        <img
          src={val}
          alt="Health"
          style={{ width: 80, height: 50, borderRadius: "6px", objectFit: "cover" }}
        />
      ),
    },
    { key: "is_active", label: "Trạng thái", render: (val) => (val ? "Hoạt động" : "Ẩn") },
  ];

  const formFields = [
    { key: "image", label: "Hình ảnh", type: "file", required: true },
    { key: "title", label: "Tiêu đề", type: "text", required: true },
    {
      key: "specialty_id",
      label: "Chuyên khoa",
      type: "select",
      options: specialties,
      required: true,
    },
    { key: "description", label: "Mô tả", type: "richtext", required: true },
    {
      key: "is_active",
      label: "Trạng thái",
      type: "select",
      options: [
        { value: true, label: "Hoạt động" },
        { value: false, label: "Ẩn" },
      ],
      required: true,
    },
  ];

  const handleAdd = async (formData) => {
    try {
      setLoading(true);
      const result = await createHealthConsultation(formData);
      setConsultations([...consultations, result]);
      toast.success("Tạo tư vấn sức khỏe thành công!");
    } catch (error) {
      toast.error("Tạo tư vấn sức khỏe thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (id, formData) => {
    try {
      setLoading(true);
      const updated = await updateHealthConsultation(id, formData);
      setConsultations(
        consultations.map((item) => (item._id === id ? updated : item))
      );
      toast.success("Cập nhật tư vấn sức khỏe thành công!");
    } catch (error) {
      toast.error("Cập nhật tư vấn sức khỏe thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteHealthConsultation(id);
      setConsultations(consultations.filter((item) => item._id !== id));
      toast.success("Xóa tư vấn sức khỏe thành công!");
    } catch (error) {
      toast.error("Xóa tư vấn sức khỏe thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleView = (item) => {
    alert(`Xem chi tiết tư vấn: ${item.title}`);
  };

  return (
    <div className="p-6">
      {loading && <LoadingSpinner />}
      <TableBase
        data={consultations}
        columns={columns}
        formFields={formFields}
        title="Quản lý tư vấn sức khỏe"
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        actions={{ add: true, edit: true, delete: true, view: true }}
      />
    </div>
  );
};

export default HealthConsultations;
