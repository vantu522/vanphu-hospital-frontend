import React, { useState, useEffect } from "react";
import { TableBase } from "../../components/admin/table/table";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/admin/ui/loading";
import {
  getAllSpecialties,
  createSpecialty,
  updateSpecialty,
  deleteSpecialty,
} from "../../services/client/specialties";

const Specialties = () => {
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllSpecialties();
        setSpecialties(res);
      } catch (error) {
        console.error("Failed to load specialties:", error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { key: "name", label: "Tên chuyên khoa" },
    { key: "description", label: "Mô tả" ,
      truncate: true,
      truncateLength: 120,
    },
    // {
    //   key: "functions",
    //   label: "Chức năng nhiệm vụ",
    //   truncate: true,
    //   truncateLength: 120,
    //   render: (val) => val?.join(", "),
    // },
    {
      key: "images",
      label: "Hình ảnh",
      render: (val) =>
        val?.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="specialty-img"
            style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 4 }}
          />
        )),
    },
  ];

  const formFields = [
    { key: "name", label: "Tên chuyên khoa", type: "text", required: true },
    { key: "description", label: "Mô tả", type: "text" },
    { key: "functions", label: "Chức năng nhiệm vụ", type: "tags" },
    { key: "images", label: "Hình ảnh", type: "file", multiple: true },
  ];

  const handleAdd = async (formData) => {
    try {
      setLoading(true);
      const result = await createSpecialty(formData);
      setSpecialties([...specialties, result]);
      toast.success("Tạo chuyên khoa thành công!");
    } catch (err) {
      toast.error("Tạo chuyên khoa thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (id, formData) => {
    try {
      setLoading(true);
      const updated = await updateSpecialty(id, formData);
      setSpecialties(specialties.map((item) => (item._id === id ? updated : item)));
      toast.success("Cập nhật chuyên khoa thành công!");
    } catch (err) {
      toast.error("Cập nhật chuyên khoa thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteSpecialty(id);
      setSpecialties(specialties.filter((item) => item._id !== id));
      toast.success("Xoá chuyên khoa thành công!");
    } catch (err) {
      toast.error("Xoá chuyên khoa thất bại!");
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  const handleView = (item) => {
    alert(`Chuyên khoa: ${item.name}`);
  };

  return (
    <div className="p-6">
      {loading && <LoadingSpinner />}
      <TableBase
        data={specialties}
        columns={columns}
        formFields={formFields}
        title="Quản lý chuyên khoa"
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        actions={{ add: true, edit: true, delete: true, view: true }}
      />
    </div>
  );
};

export default Specialties;
