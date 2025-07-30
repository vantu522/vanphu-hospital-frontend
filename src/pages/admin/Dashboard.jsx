import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Users, Package, MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Monthly');

  // Sample data for monthly sales chart
  const monthlySalesData = [
    { month: 'Jan', sales: 150 },
    { month: 'Feb', sales: 380 },
    { month: 'Mar', sales: 200 },
    { month: 'Apr', sales: 300 },
    { month: 'May', sales: 180 },
    { month: 'Jun', sales: 190 },
    { month: 'Jul', sales: 280 },
    { month: 'Aug', sales: 100 },
    { month: 'Sep', sales: 220 },
    { month: 'Oct', sales: 390 },
    { month: 'Nov', sales: 270 },
    { month: 'Dec', sales: 120 }
  ];

  // Statistics data for bottom section
  const statisticsData = [
    { period: 'Jan', value: 220 },
    { period: 'Feb', value: 180 },
    { period: 'Mar', value: 160 },
    { period: 'Apr', value: 200 },
    { period: 'May', value: 170 },
    { period: 'Jun', value: 190 },
    { period: 'Jul', value: 210 },
    { period: 'Aug', value: 140 },
    { period: 'Sep', value: 180 },
    { period: 'Oct', value: 250 },
    { period: 'Nov', value: 230 },
    { period: 'Dec', value: 160 }
  ];

  const StatCard = ({ icon: Icon, title, value, change, isPositive }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Icon size={20} className="text-gray-600" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <div className="flex items-center mt-2">
            {isPositive ? (
              <TrendingUp size={16} className="text-green-500 mr-1" />
            ) : (
              <TrendingDown size={16} className="text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const CircularProgress = ({ percentage, title, subtitle }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal size={20} />
          </button>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 mb-6">
            <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgb(243, 244, 246)"
                strokeWidth="8"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgb(99, 102, 241)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300 ease-in-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">{percentage}%</span>
              <span className="text-sm text-green-500 font-medium">+10%</span>
            </div>
          </div>
          
          <p className="text-center text-gray-600 text-sm mb-6">
            You earn $3287 today, it's higher than last month.<br />
            Keep up your good work!
          </p>
          
          <div className="flex justify-between w-full">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Target</p>
              <div className="flex items-center">
                <span className="text-sm font-semibold text-gray-900">$20K</span>
                <TrendingDown size={12} className="text-red-500 ml-1" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Revenue</p>
              <div className="flex items-center">
                <span className="text-sm font-semibold text-gray-900">$20K</span>
                <TrendingUp size={12} className="text-green-500 ml-1" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Today</p>
              <div className="flex items-center">
                <span className="text-sm font-semibold text-gray-900">$20K</span>
                <TrendingUp size={12} className="text-green-500 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <StatCard
          icon={Users}
          title="Customers"
          value="3,782"
          change="11.01%"
          isPositive={true}
        />
        <StatCard
          icon={Package}
          title="Orders"
          value="5,359"
          change="9.05%"
          isPositive={false}
        />
        <CircularProgress
          percentage={75.55}
          title="Monthly Target"
          subtitle="Target you've set for each month"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Monthly Sales Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Monthly Sales</h3>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal size={20} />
            </button>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlySalesData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <Bar 
                  dataKey="sales" 
                  fill="#6366F1" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Statistics Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Statistics</h3>
              <p className="text-sm text-gray-600">Target you've set for each month</p>
            </div>
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {['Monthly', 'Quarterly', 'Annually'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === tab
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statisticsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <XAxis 
                  dataKey="period" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#6366F1" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;