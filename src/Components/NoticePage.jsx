import { useState } from 'react';

const NoticePage = () => {
  const [notices, setNotices] = useState([
    { id: 1, title: 'Rent Payment Reminder', description: 'Please pay your rent on time to avoid late fees.', date: '2024-01-01' },
    { id: 2, title: 'Maintenance Schedule', description: 'The building will be undergoing maintenance on the 15th of January.', date: '2024-01-10' },
    { id: 3, title: 'New Parking Rules', description: 'Please note that parking is only allowed in designated areas.', date: '2024-01-20' },
  ]);

  const [newNotice, setNewNotice] = useState({ title: '', description: '' });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const notice = { id: notices.length + 1, title: newNotice.title, description: newNotice.description, date: new Date().toISOString().split('T')[0] };
    setNotices([...notices, notice]);
    setNewNotice({ title: '', description: '' });
    setShowForm(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Notices</h1>
      <button hidden className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={() => setShowForm(!showForm)}>Create New Notice</button>
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4">
          <input type="text" value={newNotice.title} onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })} placeholder="Title" className="block w-full p-2 mb-2 border border-gray-400" />
          <textarea value={newNotice.description} onChange={(e) => setNewNotice({ ...newNotice, description: e.target.value })} placeholder="Description" className="block w-full p-2 mb-2 border border-gray-400" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      )}
      <ul>
        {notices.map((notice) => (
          <li key={notice.id} className="bg-white p-4 mb-4 border border-gray-400">
            <h2 className="text-2xl font-bold mb-2">{notice.title}</h2>
            <p className="mb-2">{notice.description}</p>
            <p className="text-gray-600">{notice.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticePage;