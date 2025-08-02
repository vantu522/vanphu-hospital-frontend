import React, { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  BarChart3,
  Megaphone,
  Users,
  Package,
  Cloud,
  Truck,
  Bot,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  Info,
  InfoIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Tổng quan",
      icon: LayoutDashboard,
      hasSubmenu: false,
      path: "/admin/dashboard",
      isActive: window.location.pathname.includes("/admin/dashboard"),
    },
    {
      name: "Quản lý dịch vụ",
      icon: ShoppingCart,
      hasSubmenu: false,
      path: "/admin/services",
      isActive: window.location.pathname.includes("/admin/services"),
    },
    {
      name: "Quản lý bác sĩ",
      icon: Users,
      hasSubmenu: true,
      isOpen: isDoctorOpen,
      toggle: () => setIsDoctorOpen(!isDoctorOpen),
    },
    {
      name: "Quản lý chuyên khoa",
      icon: Package,
      hasSubmenu: false,
      path: "/admin/specialties",
      isActive: window.location.pathname.includes("/admin/specialties"),
    },
    {
      name: "Quản lý tư vấn sức khỏe",
      icon: Cloud,
      hasSubmenu: false,
      path: "/admin/health-consultations",
      isActive: window.location.pathname.includes(
        "/admin/health-consultations"
      ),
    },
    {
      name: "Quản lý tin tức",
      icon: Megaphone,
      hasSubmenu: false,
      path: "/admin/news",
      isActive: window.location.pathname.includes("/admin/news"),
    },
    {
      name: "Quản lý tuyển dụng",
      icon: Truck,
      hasSubmenu: false,
      path: "/admin/recruitments",
      isActive: window.location.pathname.includes("/admin/recruitments"),
    },
    {
      name: "Quản lý phản hồi",
      icon: BarChart3,
      hasSubmenu: false,
      path: "/admin/contacts",
      isActive: window.location.pathname.includes("/admin/contacts"),
    },
    {
      name: "Quản lý đặt lịch",
      icon: ShoppingBag,
      hasSubmenu: false,
      path: "/admin/appointments",
      isActive: window.location.pathname.includes("/admin/appointments"),
    },
    {
      name:'Thông tin',
      icon: InfoIcon,
      hasSubmenu: false,
      path: "/admin/information",
      isActive: window.location.pathname.includes("/admin/information"),
    }
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg border-r border-gray-200">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-1 h-6 bg-white rounded"></div>
              <div className="w-1 h-6 bg-white rounded"></div>
              <div className="w-1 h-6 bg-white rounded"></div>
            </div>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Bảng điều khiển</h1>
        </div>
      </div>

      {/* Menu */}
      <div className="p-4">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
          MENU
        </div>

        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                  item.isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => {
                  if (item.hasSubmenu) {
                    item.toggle();
                  } else if (item.path) {
                    navigate(item.path);
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <item.icon
                    size={20}
                    className={
                      item.isActive ? "text-blue-600" : "text-gray-500"
                    }
                  />
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-600 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                {item.hasSubmenu && (
                  <div className="text-gray-400">
                    {item.isOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                )}
              </div>

              {/* Submenu placeholder - you can add submenu items here */}
              {item.hasSubmenu && item.isOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.name === "Dashboard" && (
                    <>
                      <div className="text-sm text-gray-600">Tổng quan</div>
                      <div className="text-sm text-gray-600">Báo cáo</div>
                    </>
                  )}

                  {item.name === "Quản lý bác sĩ" && (
                    <>
                      <div
                        className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition"
                        onClick={() => navigate("/admin/doctors")}
                      >
                        Danh sách bác sĩ
                      </div>
                     
                      <div
                        className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition"
                        onClick={() => navigate("/admin/doctors/schedule")}
                      >
                        Lịch làm việc
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
