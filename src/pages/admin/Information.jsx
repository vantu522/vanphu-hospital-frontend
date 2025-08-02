import React, { useEffect, useState } from 'react';
import { 
  User, 
  Mail, 
  Phone,
  MapPin,
  Edit3,
  Clock,
  AlertTriangle,
  FileText,
  Save,
  X,
  Plus,
  Trash2
} from 'lucide-react';
import { getInformation, updateInformation } from '../../services/admin/information';
import toast from 'react-hot-toast';

export default function Information() {
  const [informationData, setInformationData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInformation = async () => {
        try {
            const response = await getInformation();
            setInformationData(response[0]);
            console.log(response[0]);
        } catch (error) {
            console.error('Error fetching information:', error);
            toast.error('Failed to load information data.');
        }
    };
    fetchInformation(); 
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleEdit = () => {
    setEditMode(true);
    setFormData({ ...informationData });
  };

  const handleCancel = () => {
    setEditMode(false);
    setFormData({});
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleArrayAdd = (field) => {
    const currentArray = formData[field] || informationData[field] || [];
    setFormData({ 
      ...formData, 
      [field]: [...currentArray, ''] 
    });
  };

  const handleArrayRemove = (field, index) => {
    const currentArray = formData[field] || informationData[field] || [];
    const newArray = currentArray.filter((_, i) => i !== index);
    setFormData({ 
      ...formData, 
      [field]: newArray 
    });
  };

  const handleArrayChange = (field, index, value) => {
    const currentArray = [...(formData[field] || informationData[field] || [])];
    currentArray[index] = value;
    setFormData({ 
      ...formData, 
      [field]: currentArray 
    });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await updateInformation(informationData._id, formData);
        setInformationData(response);
        setEditMode(false);
        toast.success('Information updated successfully!');
    } catch (error) {
      console.error('Error updating information:', error);
      toast.error('Error updating information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Information Header with Global Edit/Save */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
           
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{informationData.name}</h2>
              <p className="text-gray-600">Information Record</p>
            </div>
          </div>
          
          {/* Global Edit/Save Controls */}
          {!editMode ? (
            <button 
              onClick={handleEdit}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Edit3 size={16} />
              <span>Chỉnh sửa thông tin</span>
            </button>
          ) : (
            <div className="flex space-x-3">
              <button 
                onClick={handleSave}
                disabled={loading}
                className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                <Save size={16} />
                <span>{loading ? 'Saving...' : 'Save All Changes'}</span>
              </button>
              <button 
                onClick={handleCancel}
                className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <X size={16} />
                <span>Huỷ</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Basic Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Thông tin bệnh viện</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Name</label>
            {editMode ? (
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
              />
            ) : (
              <p className="text-gray-800 font-medium">{informationData.name || 'N/A'}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Address</label>
            {editMode ? (
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-400" />
                <input
                  type="text"
                  value={formData.address || ''}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter address"
                />
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-400" />
                <p className="text-gray-800 font-medium">{informationData.address || 'N/A'}</p>
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
            {editMode ? (
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <input
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email"
                />
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <p className="text-gray-800 font-medium">{informationData.email || 'N/A'}</p>
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
            {editMode ? (
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone_number || ''}
                  onChange={(e) => handleInputChange('phone_number', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                />
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-400" />
                <p className="text-gray-800 font-medium">{informationData.phone_number || 'N/A'}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Hotline</label>
            {editMode ? (
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-500" />
                <input
                  type="tel"
                  value={formData.hotline || ''}
                  onChange={(e) => handleInputChange('hotline', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter hotline"
                />
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-500" />
                <p className="text-gray-800 font-medium">{informationData.hotline || 'N/A'}</p>
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Emergency Phone</label>
            {editMode ? (
              <div className="flex items-center space-x-2">
                <AlertTriangle size={16} className="text-red-500" />
                <input
                  type="tel"
                  value={formData.emergency_phone || ''}
                  onChange={(e) => handleInputChange('emergency_phone', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter emergency phone"
                />
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <AlertTriangle size={16} className="text-red-500" />
                <p className="text-gray-800 font-medium">{informationData.emergency_phone || 'N/A'}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Work Hours */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
            <Clock size={20} />
            <span>Work Hours</span>
          </h3>
          {editMode && (
            <button 
              onClick={() => handleArrayAdd('work_hours')}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <Plus size={16} />
              <span>Add Hour</span>
            </button>
          )}
        </div>

        <div className="space-y-3">
          {(formData.work_hours || informationData.work_hours || []).map((hour, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Clock size={16} className="text-gray-400" />
              {editMode ? (
                <div className="flex items-center space-x-2 flex-1">
                  <input
                    type="text"
                    value={hour}
                    onChange={(e) => handleArrayChange('work_hours', index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Monday: 9:00 AM - 6:00 PM"
                  />
                  <button
                    onClick={() => handleArrayRemove('work_hours', index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ) : (
                <p className="text-gray-800">{hour}</p>
              )}
            </div>
          ))}
          {(!informationData.work_hours || informationData.work_hours.length === 0) && !editMode && (
            <p className="text-gray-500 italic">No work hours added yet.</p>
          )}
        </div>
      </div>

      {/* License Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
            <FileText size={20} />
            <span>License Information</span>
          </h3>
          {editMode && (
            <button 
              onClick={() => handleArrayAdd('license')}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <Plus size={16} />
              <span>Add License</span>
            </button>
          )}
        </div>

        <div className="space-y-3">
          {(formData.license || informationData.license || []).map((license, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <FileText size={16} className="text-green-600" />
              {editMode ? (
                <div className="flex items-center space-x-2 flex-1">
                  <input
                    type="text"
                    value={license}
                    onChange={(e) => handleArrayChange('license', index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Business License: BL-2024-001"
                  />
                  <button
                    onClick={() => handleArrayRemove('license', index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ) : (
                <p className="text-gray-800">{license}</p>
              )}
            </div>
          ))}
          {(!informationData.license || informationData.license.length === 0) && !editMode && (
            <p className="text-gray-500 italic">No licenses added yet.</p>
          )}
        </div>
      </div>

      {/* Timestamps */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Record Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Created At</label>
            <p className="text-gray-800 font-medium">
              {informationData.created_at ? formatDate(informationData.created_at) : 'N/A'}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Last Updated</label>
            <p className="text-gray-800 font-medium">
              {informationData.updated_at ? formatDate(informationData.updated_at) : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}