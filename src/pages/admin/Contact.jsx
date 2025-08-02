import React, { useState, useEffect } from "react";
import { TableBase } from "../../components/admin/table/table";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/admin/ui/loading";
import { getAllContacts,deleteContact } from "../../services/client/contact";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllContacts();
        setContacts(res);
      } catch (error) {
        console.error("Failed to load contacts:", error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { key: "full_name", label: "Họ tên" },
    { key: "phone_number", label: "Số điện thoại" },
    { key: "email", label: "Email" },
    {
      key: "message",
      label: "Lời nhắn",
      truncate: true,
      truncateLength: 100,
    },
  ];

  const formFields = [
    { key: "full_name", label: "Họ tên", type: "text", required: true },
    { key: "phone_number", label: "Số điện thoại", type: "text", required: true },
    { key: "email", label: "Email", type: "email", required: true },
    { key: "message", label: "Lời nhắn", type: "textarea", required: true },
  ];

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteContact(id);
      setContacts(contacts.filter((item) => item._id !== id));
      toast.success("Xoá liên hệ thành công!");
    } catch (err) {
      toast.error("Xoá liên hệ thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleView = (item) => {
    alert(`Lời nhắn từ ${item.hoTen}:\n\n${item.loiNhan}`);
  };

  return (
    <div className="p-6">
      {loading && <LoadingSpinner />}
      <TableBase
        data={contacts}
        columns={columns}
        formFields={formFields}
        title="Quản lý liên hệ"
        onDelete={handleDelete}
        onView={handleView}
        actions={{ add: false, edit: false, delete: true, view: true }}
        searchable={true}
        paginated={true}
      />
    </div>
  );
};

export default Contact;
