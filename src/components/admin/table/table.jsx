import  { useState, useMemo ,useEffect} from "react";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";
import DataForm from "./components/Form";
import Modal from "./components/Modal";
import ToggleSwitch from "../ui/ToggleSwitch";



// Main Table Component
const TableBase = ({
  data = [],
  columns = [],
  formFields = [],
  title = "Data Table",
  onAdd,
  onEdit,
  onDelete,
  onView,
  onToggle, // New toggle handler
  searchable = true,
  paginated = true,
  pageSize = 10,
  actions = { add: true, edit: true, delete: true, view: false, toggle: false },
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;

    return data.filter((item) =>
      columns.some((column) => {
        const value = item[column.key];
        return (
          value &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }, [data, searchTerm, columns]);

  // Paginate filtered data
  const paginatedData = useMemo(() => {
    if (!paginated) return filteredData;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, pageSize, paginated]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  // Handle actions
  const handleAdd = (formData) => {
    onAdd?.(formData);
    setShowAddModal(false);
  };

  const handleEdit = (formData) => {
    onEdit?.(selectedItem._id, formData);
    setShowEditModal(false);
    setSelectedItem(null);
  };

  const handleDelete = () => {
    onDelete?.(selectedItem._id);
    setShowDeleteModal(false);
    setSelectedItem(null);
  };

  const handleToggle = (item) => {
    onToggle?.(item._id, !item.isActive);
  };

  const renderCellValue = (item, column) => {
    const value = item[column.key];

    // Ưu tiên dùng hàm render nếu có
    if (column.render) {
      return column.render(value, item);
    }

    // Nếu là toggle switch
    if (column.type === "toggle") {
      return (
        <ToggleSwitch
          checked={!!value}
          onChange={(newValue) => {
            if (onToggle) {
              onToggle(item._id, newValue);
            }
          }}
        />
      );
    }

    // Nếu là badge
    if (column.type === "badge") {
      const badgeClass =
        column.badgeColors?.[value] || "bg-gray-100 text-gray-800";
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClass}`}
        >
          {value}
        </span>
      );
    }

    // Nếu yêu cầu cắt ngắn nội dung (ví dụ cho description)
    if (column.truncate) {
      const maxLength = column.truncateLength || 100;
      const shortText =
        value && value.length > maxLength
          ? `${value.slice(0, maxLength)}...`
          : value;

      return (
        <div
          className="max-w-[400px] whitespace-normal break-words"
          title={value}
        >
          {shortText}
        </div>
      );
    }

    return value;
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          {actions.add && (
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              <Plus size={16} />
              <span>Thêm mới </span>
            </button>
          )}
        </div>

        {searchable && (
          <div className="mt-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full max-w-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
              {(actions.edit || actions.delete || actions.view || actions.toggle) && (
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hành động
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No data found
                </td>
              </tr>
            ) : (
              paginatedData.map((item, index) => (
                <tr key={item.id || index} className="hover:bg-gray-50">
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      {renderCellValue(item, column)}
                    </td>
                  ))}
                  {(actions.edit || actions.delete || actions.view || actions.toggle) && (
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        {actions.view && (
                          <button
                            onClick={() => onView?.(item)}
                            className="text-blue-600 hover:text-blue-900"
                            title="Xem chi tiết"
                          >
                            <Eye size={16} />
                          </button>
                        )}
                        {actions.edit && (
                          <button
                            onClick={() => {
                              setSelectedItem(item);
                              setShowEditModal(true);
                            }}
                            className="text-indigo-600 hover:text-indigo-900"
                            title="Chỉnh sửa"
                          >
                            <Edit2 size={16} />
                          </button>
                        )}
                        {actions.toggle && (
                          <div className="flex items-center" title="Bật/Tắt hoạt động">
                            <ToggleSwitch
                              checked={!!item.isActive}
                              onChange={() => handleToggle(item)}
                            />
                          </div>
                        )}
                        {actions.delete && (
                          <button
                            onClick={() => {
                              setSelectedItem(item);
                              setShowDeleteModal(true);
                            }}
                            className="text-red-600 hover:text-red-900"
                            title="Xóa"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {paginated && totalPages > 1 && (
        <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing {(currentPage - 1) * pageSize + 1} to{" "}
            {Math.min(currentPage * pageSize, filteredData.length)} of{" "}
            {filteredData.length} results
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronsLeft size={16} />
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="px-3 py-1 text-sm">
              {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronsRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Thêm mới"
      >
        <DataForm
          fields={formFields}
          onSubmit={handleAdd}
          onCancel={() => setShowAddModal(false)}
        />
      </Modal>

      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Chỉnh sửa"
      >
        <DataForm
          data={selectedItem}
          fields={formFields}
          onSubmit={handleEdit}
          onCancel={() => setShowEditModal(false)}
          isEdit={true}
        />
      </Modal>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Xác nhận xoá ?"
      >
        <div>
          <p className="text-gray-600 mb-4">Bạn có chắc chắn muốn xoá chứ</p>
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Huỷ
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Xoá
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export { Modal, DataForm, TableBase };
export default TableBase;