import React from 'react';

const NoticePage = () => {
  const notices = [
    { id: 1, title: 'Rent Payment Reminder', description: 'Please pay your rent on time to avoid late fees.', date: '2024-01-01' },
    { id: 2, title: 'Maintenance Schedule', description: 'The building will be undergoing maintenance on the 15th of January.', date: '2024-01-10' },
    { id: 3, title: 'New Parking Rules', description: 'Please note that parking is only allowed in designated areas.', date: '2024-01-20' },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Notices</h1>

      <ul className="space-y-6">
        {notices.map((notice) => (
          <li key={notice.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">{notice.title}</h2>
            <p className="text-gray-700 mb-2">{notice.description}</p>
            <p className="text-gray-500 text-sm">Date: {notice.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticePage;
