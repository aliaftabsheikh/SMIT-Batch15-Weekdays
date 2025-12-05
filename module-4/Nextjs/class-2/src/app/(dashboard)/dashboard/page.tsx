import React from 'react';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-500 mt-2">Welcome back, here's what's happening today.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-indigo-200 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Project
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Revenue', value: '$54,230', change: '+12.5%', color: 'from-blue-500 to-blue-600', icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
          { title: 'Active Users', value: '2,453', change: '+5.2%', color: 'from-purple-500 to-purple-600', icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' },
          { title: 'New Orders', value: '450', change: '-2.4%', color: 'from-pink-500 to-pink-600', icon: 'M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' },
          { title: 'Pending Issues', value: '12', change: '+1.2%', color: 'from-orange-500 to-orange-600', icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg shadow-indigo-100`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                </svg>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Section (Simulated) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">Revenue Analytics</h2>
            <select className="bg-gray-50 border-none text-sm text-gray-500 rounded-lg px-3 py-2 outline-none">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          
          {/* CSS Bar Chart */}
          <div className="h-64 flex items-end justify-between gap-2 mt-8 px-2">
            {[40, 65, 45, 80, 55, 90, 70, 50, 60, 75, 85, 60].map((height, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2 group">
                <div className="relative w-full bg-gray-100 rounded-t-lg h-full overflow-hidden">
                   <div 
                     className="absolute bottom-0 left-0 right-0 bg-indigo-500 rounded-t-lg transition-all duration-500 group-hover:bg-indigo-600"
                     style={{ height: `${height}%` }}
                   ></div>
                </div>
                <span className="text-xs text-gray-400">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {[
              { user: 'Alice Smith', action: 'placed a new order', time: '2 min ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
              { user: 'Bob Johnson', action: 'subscribed to plan', time: '1 hour ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob' },
              { user: 'Charlie Brown', action: 'left a review', time: '3 hours ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie' },
              { user: 'Diana Prince', action: 'updated profile', time: '5 hours ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diana' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <img src={item.avatar} alt={item.user} className="w-10 h-10 rounded-full bg-gray-100" />
                <div>
                  <p className="text-sm text-gray-800 font-medium">
                    <span className="font-bold">{item.user}</span> {item.action}
                  </p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg transition-colors">
            View All Activity
          </button>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
          <button className="text-sm text-indigo-600 font-medium hover:underline">See All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { id: '#ORD-001', customer: 'John Doe', product: 'Premium Plan', amount: '$120.00', status: 'Completed' },
                { id: '#ORD-002', customer: 'Jane Smith', product: 'Basic Plan', amount: '$45.00', status: 'Processing' },
                { id: '#ORD-003', customer: 'Mike Jones', product: 'Enterprise', amount: '$950.00', status: 'Completed' },
                { id: '#ORD-004', customer: 'Sarah Wilson', product: 'Premium Plan', amount: '$120.00', status: 'Pending' },
              ].map((order, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4">{order.product}</td>
                  <td className="px-6 py-4">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
