import { User, Plus, ChevronRight } from "lucide-react";

const UserSelection = ({ sampleUsers, onUserSelection, onEditUser }) => {
  // Sample data for demonstration
  const defaultUsers = sampleUsers || [
    {
      name: "DƯƠNG VĂN TÚ",
      dob: "23/05/2005",
      phone: "0393264758",
      isAccountHolder: true
    },
    {
      name: "NGUYỄN THỊ LINH",
      dob: "15/03/1985",
      phone: "0987654321",
      isAccountHolder: false
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 max-w-sm md:max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-center text-green-600 mb-4 md:mb-8">
        Chọn người tới khám
      </h2>
      
      <div className="space-y-3 md:space-y-4">
        {defaultUsers.map((userData, index) => (
          <div
            key={index}
            className="flex items-center p-3 md:p-6 border-2 border-gray-200 rounded-xl hover:border-green-300 transition-colors cursor-pointer"
            onClick={() => onUserSelection && onUserSelection(userData)}
          >
            {/* Avatar */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center mr-3 md:mr-6 flex-shrink-0">
              <User className="w-6 h-6 md:w-8 md:h-8 text-gray-500" />
            </div>
            
            {/* User Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base md:text-xl font-bold text-gray-800 truncate">
                {userData.name}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Ngày sinh: {userData.dob}
              </p>
              <p className="text-gray-600 text-xs md:text-sm">
                SĐT: {userData.phone}
              </p>
              {userData.isAccountHolder && (
                <span className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full mt-1 md:mt-2">
                  Chủ tài khoản
                </span>
              )}
            </div>
            
            {/* Actions */}
            <div className="flex flex-col items-end ml-3 md:ml-6 flex-shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEditUser && onEditUser(userData);
                }}
                className="bg-green-500 text-white px-3 py-1.5 md:px-6 md:py-2 rounded-lg hover:bg-green-600 transition-colors text-xs md:text-base mb-1 md:mb-2"
              >
                Chỉnh sửa
              </button>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
            </div>
          </div>
        ))}
        
        {/* Add New Member Button */}
        <button className="w-full flex items-center justify-center p-3 md:p-6 border-2 border-dashed border-green-300 rounded-xl text-green-500 hover:bg-green-50 transition-colors text-sm md:text-lg">
          <Plus className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Thêm thành viên mới
        </button>
      </div>
    </div>
  );
};

export default UserSelection;



