import { TableBase } from "../../components/admin/table/table";
import React, { useState,useEffect } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/admin/ui/loading";
import { createNews, deleteNews, getAllNews, updateNews } from "../../services/client/news";

const New = () => {
  const [news, setNews] = useState([
  ]);
  const [loading, setLoading] = useState(false);
const [formData, setFormData] = useState({
  title: "",
  slug: "",
  description: "",
  content: "",
  image: "",
  author: "",
  category: "",
  tags: "",
  publish_date: "",
  is_active: true,
});


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getAllNews();
        setNews(response);
      } catch (error) {
        console.error("Failed to fetch ", error);
      }
    }
    fetchNews();
  }, []);

const columns = [
  { key: "title", label: "Tiêu đề" },
  { key: "slug", label: "Slug" },
  { key: "description", label: "Mô tả", truncate: true, truncateLength: 100 },
  { key: "author", label: "Tác giả" },
  { key: "category", label: "Chuyên mục" },
  { key: "is_active", label: "Hoạt động" },
];

const formFields = [
  { key: "title", label: "Tiêu đề", type: "text", required: true },
  { key: "slug", label: "Slug", type: "text", required: true },
  { key: "description", label: "Mô tả", type: "textarea" },
  { key: "content", label: "Nội dung", type: "textarea" },
  { key: "image", label: "Hình ảnh (URL)", type: "file" },
  { key: "author", label: "Tác giả", type: "text" },
  { key: "category", label: "Chuyên mục", type: "text" },
  { key: "tags", label: "Thẻ (phân cách bằng dấu phẩy)", type: "text" },
  { key: "publish_date", label: "Ngày đăng", type: "date" },
  { key: "is_active", label: "Hoạt động", type: "checkbox" },
];

  const handleAdd = async  (formData) => {
     try {
      setLoading(true);
      const result = await createNews(formData);
      setNews([...news, result]);
      toast.success("Tạo tin tức  thành công!");
    } catch (error) {
      toast.error("Tạo tin tức thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (id, formData) => {
      try{
        setLoading(true)
        const updatedService = await updateNews(id, formData);
        setNews(news.map((item) => (item._id === id ? updatedService : item)));
        toast.success("Dịch vụ đã được cập nhật thành công!");
      }
      catch (error) {
        console.error("Failed to update service:", error);
        toast.error("Cập nhật dịch vụ thất bại!");
      } finally{
        setLoading(false)
      }
  };

 const handleDelete = async (id) => {
    try {
      setLoading(true)
      await deleteNews(id);
      setNews(news.filter((item) => item._id !== id));
      toast.success("Dịch vụ đã được xóa thành công!");
    } catch (error) {
      console.error("Failed to delete service:", error);
      toast.error("Xóa dịch vụ thất bại!");
    } finally{
      setLoading(false)
    }
  }
  const handleView = (item) => {
    alert(`Viewing service: ${item.name}`);
  };

  return (
    <div className="p-6">
      {loading && <LoadingSpinner/>}      

      <TableBase
      
        data={news}
        columns={columns}
        formFields={formFields}
        title="Quản lý tin tức"
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
