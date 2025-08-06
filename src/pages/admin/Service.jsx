import { TableBase } from "../../components/admin/table/table";
import React, { useState, useEffect } from "react";
import {
  getAllServices,
  createService,
  deleteService,
  updateService,
} from "../../services/client/services";
import toast from "react-hot-toast";
import { getAllSpecialties } from "../../services/client/specialties";
import LoadingSpinner from "../../components/admin/ui/loading";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [specialty, setSpecialty] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getAllServices();
        setServices(response);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };
    const fetchSpecialties = async () => {
      try {
        const data = await getAllSpecialties();
        setSpecialty(
          data.map((item) => ({
            value: item._id, // value là id
            label: item.name, // hiển thị tên
          }))
        );
      } catch (error) {
        console.error("Failed to fetch specialties:", error);
      }
    };
    fetchServices();
    fetchSpecialties();
  }, []);

  const columns = [
    { key: "name", label: "Tiêu đề" },
    // {
    //   key: "description",
    //   label: "Mô tả",
    //   truncate: true,
    //   truncateLength: 120,
    //   render: (val) => <div dangerouslySetInnerHTML={{ __html: val }} />
    // },
      {
      key: "specialties",
      label: "Chuyên khoa",
      render: (val) => val?.name || "N/A" // hiển thị tên chuyên khoa
    },

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
    {
      key: "images",
      label: "Ảnh dịch vụ",
      render: (val) => (
        <div style={{ display: "flex", gap: "5px" }}>
          {val.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Service ${index}`}
              style={{ width: 50, height: 50, borderRadius: "5px" }}
            />
          ))}
        </div>
      ),
    },
  ];

  const formFields = [
    { key: "name", label: "Họ tên", type: "text", required: true },
    {
      key: "description",
      label: "Mô tả",
      type: "richtext",
      required: true,
    },
    {
      key: "specialties", // thay specialties -> specialty
      label: "Chuyên khoa",
      type: "select", // chuyển thành select
      options: specialty,
      required: true,
    },
    { key: "avatar", label: "Ảnh đại diện", type: "file", required: true },
    {
      key: "images",
      label: "Ảnh dịch vụ",
      type: "file",
      multiple: true,
      required: true,
    },
    {
      key: "status",
      label: "Trạng thái",
      type: "select",
      options: ["active", "inactive"],
      required: false,
    },
    { key: "features", label: "Tính năng", type: "tags", required: false },
  ];

  const handleAdd = async (formData) => {
    try {
      setLoading(true);
      const result = await createService(formData);
      toast.success("Tạo dịch vụ đã được thêm thành công!");
      setServices([...services, result]);
    } catch (error) {
      toast.error("Tạo dịch vụ thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (id, formData) => {
    try {
      setLoading(true);
      const updatedService = await updateService(id, formData);
      setServices(
        services.map((item) => (item._id === id ? updatedService : item))
      );
      toast.success("Dịch vụ đã được cập nhật thành công!");
    } catch (error) {
      console.error("Failed to update service:", error);
      toast.error("Cập nhật dịch vụ thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteService(id);
      setServices(services.filter((item) => item._id !== id));
      toast.success("Dịch vụ đã được xóa thành công!");
    } catch (error) {
      console.error("Failed to delete service:", error);
      toast.error("Xóa dịch vụ thất bại!");
    } finally {
      setLoading(false);
    }
  };
  const handleView = (item) => {
    alert(`Viewing service: ${item.name}`);
  };

  return (
    <div className="p-6">
      {loading && <LoadingSpinner />}
      <TableBase
        data={services}
        columns={columns}
        formFields={formFields}
        title="Quản lý dịch vụ"
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        actions={{ add: true, edit: true, delete: true, view: true }}
      />
    </div>
  );
};

export default Services;
