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
  Calendar,
  MessageCircle,
  Newspaper,
  UserCheck,
  Settings,
  Building,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({collapsed}) => {
  const [openSections, setOpenSections] = useState({
    medical: false,
    management: false,
    content: false,
    system: false,
  });
  const navigate = useNavigate();


  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleNavigate = (path) => {
    console.log(`Navigating to: ${path}`);
    // Simulate navigation
    navigate(path)
  };

  const menuGroups = [
    // === TỔNG QUAN ===
    {
      title: "TỔNG QUAN",
      items: [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
          path: "/admin/dashboard",
          isActive: true,
        }
      ]
    },

    // === QUẢN LÝ Y TẾ ===
    {
      title: "QUẢN LÝ Y TẾ",
      items: [
        {
          name: "Quản lý bác sĩ",
          icon: Users,
          hasSubmenu: true,
          isOpen: openSections.medical,
          toggle: () => toggleSection('medical'),
          submenu: [
            { name: "Danh sách bác sĩ", path: "/admin/doctors" },
            { name: "Lịch làm việc", path: "/admin/doctors/schedule" },
            { name: "Chuyên môn", path: "/admin/doctors/expertise" }
          ]
        },
        {
          name: "Quản lý chuyên khoa",
          icon: Package,
          path: "/admin/specialties",
        },
        {
          name: "Quản lý dịch vụ",
          icon: ShoppingCart,
          path: "/admin/services",
        }
      ]
    },

    // === QUẢN LÝ LỊCH HẸN & TƯ VẤN ===
    {
      title: "LỊCH HẸN & TƯ VẤN",
      items: [
        {
          name: "Quản lý đặt lịch",
          icon: Calendar,
          path: "/admin/appointments",
          badge: "12"
        },
        {
          name: "Tư vấn sức khỏe",
          icon: MessageCircle,
          path: "/admin/health-consultations",
        }
      ]
    },

    // === QUẢN LÝ NỘI DUNG ===
    {
      title: "NỘI DUNG & TRUYỀN THÔNG",
      items: [
        {
          name: "Quản lý tin tức",
          icon: Newspaper,
          path: "/admin/news",
        },
        {
          name: "Quản lý tuyển dụng",
          icon: UserCheck,
          path: "/admin/recruitments",
        }
      ]
    },

    // === PHẢN HỒI & BÁO CÁO ===
    {
      title: "PHẢN HỒI & BÁO CÁO",
      items: [
        {
          name: "Quản lý phản hồi",
          icon: BarChart3,
          path: "/admin/contacts",
          badge: "5"
        }
      ]
    },

    // === CÀI ĐẶT HỆ THỐNG ===
    {
      title: "HỆ THỐNG",
      items: [
        {
          name: "Thông tin hệ thống",
          icon: Info,
          path: "/admin/information",
        },
        {
          name: "Cài đặt",
          icon: Settings,
          path: "/admin/settings",
        }
      ]
    }
  ];

  return (
  <div
      className={`h-screen shadow-lg border-r border-gray-200 overflow-y-auto transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      } bg-white`}
    >
      {/* Logo + chỉ hiển thị chữ nếu không collapsed */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Building className="text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-gray-900">Hệ thống Y Tế</h1>
              <p className="text-xs text-gray-500">Bảng điều khiển</p>
            </div>
          )}
        </div>
      </div>
      

      {/* Menu items: ẩn tên nếu collapsed */}
      <div className="p-4 space-y-6">
        {menuGroups.map((group, idx) => (
          <div key={idx}>
            {!collapsed && (
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                {group.title}
              </div>
            )}
            <nav className="space-y-1">
              {group.items.map((item, index) => (
  <div key={index}>
    <div
      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer ${
        item.isActive ? 'bg-blue-50' : ''
      }`}
      onClick={() =>
        item.hasSubmenu ? item.toggle() : handleNavigate(item.path)
      }
    >
      <div className="flex items-center">
        <item.icon size={18} className="text-gray-600" />
        {!collapsed && (
          <span className="ml-3 text-sm">{item.name}</span>
        )}
      </div>
      {item.hasSubmenu && !collapsed && (
        item.isOpen ? (
          <ChevronUp size={16} className="text-gray-400" />
        ) : (
          <ChevronDown size={16} className="text-gray-400" />
        )
      )}
    </div>

    {/* Hiển thị submenu nếu mở và không collapsed */}
    {item.hasSubmenu && item.isOpen && !collapsed && (
      <div className="ml-8 mt-1 space-y-1">
        {item.submenu?.map((subItem, subIndex) => (
          <div
            key={subIndex}
            className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer px-2 py-1"
            onClick={() => handleNavigate(subItem.path)}
          >
            {subItem.name}
          </div>
        ))}
      </div>
    )}
  </div>
))}

            </nav>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;