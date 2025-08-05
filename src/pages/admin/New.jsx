import { TableBase } from "../../components/admin/table/table";
import React, { useState,useEffect } from "react";
import { getAllServices,createService,deleteService,updateService } from "../../services/client/services";
import toast from "react-hot-toast";

const New = () => {
  const [services, setServices] = useState([
  ]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    duration: 0,
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getAllServices();
        setServices(response);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    }
    fetchServices();
  }, []);

  const columns = [
    { key: "name", label: "Họ tên" },
    {
      key: "description",
      label: "Mô tả",
      truncate: true, 
      truncateLength: 120,
    },
   
    { key: "duration", label: "Thời gian (phút)" },
    {
      key: "createdAt",
      label: "Ngày tạo",
      render: (val) => new Date(val).toLocaleString(),
    },
  ];

  const formFields = [
    { key: "name", label: "Họ tên", type: "text", required: true },
    {
      key: "description",
      label: "Mô tả",
      type: "textarea",
      required: true,
    },
    { key: "price", label: "Giá ", type: "number", required: true },
    {
      key: "duration",
      label: "Thời gian (phút)",
      type: "number",
      required: true,
    },
  ];

  const handleAdd = async  (formData) => {
    const result = await createService(formData);
    setServices([...services, result]);
    setFormData({ name: "", description: "", price: 0, duration: 0 });
    toast.success("Tạo dịch vụ đã được thêm thành công!");
  };

  const handleEdit = async (id, formData) => {
      try{
        const updatedService = await updateService(id, formData);
        setServices(services.map((item) => (item._id === id ? updatedService : item)));
        toast.success("Dịch vụ đã được cập nhật thành công!");
      }
      catch (error) {
        console.error("Failed to update service:", error);
        toast.error("Cập nhật dịch vụ thất bại!");
      }
  };

 const handleDelete = async (id) => {
    try {
      await deleteService(id);
      setServices(services.filter((item) => item._id !== id));
      toast.success("Dịch vụ đã được xóa thành công!");
    } catch (error) {
      console.error("Failed to delete service:", error);
      toast.error("Xóa dịch vụ thất bại!");
    }
  }
  const handleView = (item) => {
    alert(`Viewing service: ${item.name}`);
  };

  return (
    <div className="p-6">
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

export default New;
