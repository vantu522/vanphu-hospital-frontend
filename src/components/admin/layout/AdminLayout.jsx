import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from './Topbar';
import React, { useState } from 'react';

const AdminLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  return (
    <div className="flex h-screen">
      <Sidebar collapsed={isSidebarCollapsed} />
      <div className="flex flex-col flex-1">
        <Topbar toggleSidebar={() => setIsSidebarCollapsed(prev => !prev)} />
        <main className="flex-1 p-4 overflow-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
