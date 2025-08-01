const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Lớp nền mờ */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Nội dung modal */}
      <div className="relative bg-white rounded-lg p-6 w-[800px] max-h-[90vh] overflow-y-auto mx-4 z-10">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-20">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;
