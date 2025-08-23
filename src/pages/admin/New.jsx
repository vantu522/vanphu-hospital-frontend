import { TableBase } from "../../components/admin/table/table";
import React, { useState,useEffect } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/admin/ui/loading";
import { createNews, deleteNews, getAllNews, updateNews } from "../../services/client/news";

const New = () => {
  const [news, setNews] = useState([]);
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
        setLoading(true);
        const response = await getAllNews();
        setNews(response);
      } catch (error) {
        console.error("Failed to fetch ", error);
      }finally{
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  const columns = [
    { key: "title", label: "Tiêu đề" },
    { key: "description", label: "Mô tả", truncate: true, truncateLength: 100 },
    { key: "author", label: "Tác giả" },
    { key: "category", label: "Chuyên mục" },
    { 
      key: "is_active", 
      label: "Hoạt động", 
      type: "toggle" // Thêm type: "toggle" để render toggle switch trong cột
    },
  ];

  const formFields = [
    { key: "title", label: "Tiêu đề", type: "text", required: true },
    { key: "description", label: "Mô tả", type: "textarea" },
    { key: "content", label: "Nội dung", type: "richtext" },
    { key: "image", label: "Hình ảnh (URL)", type: "file" },
    { key: "author", label: "Tác giả", type: "text" },
    { key: "category", label: "Chuyên mục", type: "text" },
    { key: "tags", label: "Thẻ (phân cách bằng dấu phẩy)", type: "text" },
    { key: "publish_date", label: "Ngày đăng", type: "date" },
    { key: "is_active", label: "Hoạt động", type: "toggle" },
  ];

  const handleAdd = async (formData) => {
    try {
      setLoading(true);
      const result = await createNews(formData);
      setNews([...news, result]);
      toast.success("Tạo tin tức thành công!");
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
      toast.success("Tin tức đã được cập nhật thành công!");
    }
    catch (error) {
      console.error("Failed to update news:", error);
      toast.error("Cập nhật tin tức thất bại!");
    } finally{
      setLoading(false)
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true)
      await deleteNews(id);
      setNews(news.filter((item) => item._id !== id));
      toast.success("Tin tức đã được xóa thành công!");
    } catch (error) {
      console.error("Failed to delete news:", error);
      toast.error("Xóa tin tức thất bại!");
    } finally{
      setLoading(false)
    }
  }

  // Thêm handler cho toggle
  const handleToggle = async (id, newStatus) => {
    try {
      setLoading(true);
      // Gọi API update với trạng thái mới
      const updatedNews = await updateNews(id, { is_active: newStatus });
      
      // Cập nhật state local
      setNews(news.map((item) => 
        item._id === id 
          ? { ...item, is_active: newStatus }
          : item
      ));
      
      toast.success(`Tin tức đã được ${newStatus ? 'kích hoạt' : 'tắt'}!`);
    } catch (error) {
      console.error("Failed to toggle news status:", error);
      toast.error("Cập nhật trạng thái thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleView = (item) => {
    alert(`Xem tin tức: ${item.title}`);
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
        onToggle={handleToggle} // Thêm handler toggle
        actions={{ 
          add: true, 
          edit: true, 
          delete: true, 
          view: true,
          toggle: false // Có thể set false vì đã có toggle trong cột
        }}
      />
    </div>
  );
};

export default New;