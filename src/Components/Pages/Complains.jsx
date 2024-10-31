import { useState, useEffect } from 'react';

const categories = [
  { value: 'rent', label: 'Rent' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'other', label: 'Other' },
];

const Complains = () => {
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [error, setError] = useState(''); // For error feedback
  const [success, setSuccess] = useState(''); // For success feedback

  // Retrieve chat log from localStorage when the component mounts
  useEffect(() => {
    const storedChatLog = localStorage.getItem('chatLog');
    if (storedChatLog) {
      setChatLog(JSON.parse(storedChatLog));
    }
  }, []);

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (!category) {
      setError('Please select a category.');
      return;
    }

    if (!message) {
      setError('Message cannot be empty.');
      return;
    }

    const newChatLog = [...chatLog, { category, message }];
    setChatLog(newChatLog);
    setMessage('');
    setCategory('');
    setError('');
    setSuccess('Message sent successfully!');

    // Save the updated chat log to localStorage
    localStorage.setItem('chatLog', JSON.stringify(newChatLog));

    // Auto-clear success message after a few seconds
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <div className="p-5 flex flex-col space-y-6 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-700 text-center">Chat with Landlord</h2>

      <div className="flex flex-col space-y-3">
        <label htmlFor="category" className="text-lg font-semibold text-gray-700">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="" disabled>Select category</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col space-y-3">
        <label htmlFor="message" className="text-lg font-semibold text-gray-700">Message</label>
        <textarea
          id="message"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 h-28 border border-gray-300 rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}

      <button
        onClick={handleSendMessage}
        className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-md"
      >
        Send Message
      </button>

      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-bold text-gray-800">Chat Log</h3>
        {chatLog.length === 0 ? (
          <p className="text-gray-600">No messages yet.</p>
        ) : (
          <div className="max-h-60 overflow-y-auto space-y-3">
            {chatLog.map((log, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-md bg-white shadow-sm">
                <p className="text-sm text-gray-600">Category: <span className="font-semibold">{log.category}</span></p>
                <p className="text-sm text-gray-600">Message: <span className="font-semibold">{log.message}</span></p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Complains;
