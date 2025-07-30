import { TableBase ,Modal,} from "../../components/admin/table";
import React, { useState } from "react";

const Services = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  ]);

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { 
      key: 'status', 
      label: 'Status',
      type: 'badge',
      badgeColors: {
        'Active': 'bg-green-100 text-green-800',
        'Inactive': 'bg-red-100 text-red-800'
      }
    },
  ];

  const formFields = [
    { key: 'name', label: 'Name', type: 'text', required: true },
    { key: 'email', label: 'Email', type: 'email', required: true },
    { 
      key: 'role', 
      label: 'Role', 
      type: 'select', 
      required: true,
      options: [
        { value: 'Admin', label: 'Admin' },
        { value: 'User', label: 'User' },
        { value: 'Editor', label: 'Editor' }
      ]
    },
    { 
      key: 'status', 
      label: 'Status', 
      type: 'select', 
      required: true,
      options: [
        { value: 'Active', label: 'Active' },
        { value: 'Inactive', label: 'Inactive' }
      ]
    },
  ];

  const handleAdd = (formData) => {
    const newUser = {
      id: Math.max(...users.map(u => u.id)) + 1,
      ...formData
    };
    setUsers([...users, newUser]);
  };

  const handleEdit = (id, formData) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, ...formData } : user
    ));
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleView = (item) => {
    alert(`Viewing: ${item.name}`);
  };

  return (
    <div className="p-6">
      <TableBase
        data={users}
        columns={columns}
        formFields={formFields}
        title="User Management"
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        actions={{ add: true, edit: true, delete: true, view: true }}
      />
    </div>
  );
};

export default Services;