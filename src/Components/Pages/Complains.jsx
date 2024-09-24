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

  // Retrieve chat log from localStorage when the component mounts
  useEffect(() => {
    const storedChatLog = localStorage.getItem('chatLog');
    if (storedChatLog) {
      setChatLog(JSON.parse(storedChatLog));
    }
  }, []);

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (category && message) {
      const newChatLog = [...chatLog, { category, message }];
      setChatLog(newChatLog);
      setMessage('');

      // Save the updated chat log to localStorage
      localStorage.setItem('chatLog', JSON.stringify(newChatLog));
    }
  };

  return (
    <div className="p-5 flex flex-col space-y-4">
      <h2 className="text-xl font-bold">Chat with Landlord</h2>

      <div className="flex flex-col space-y-2">
        <label htmlFor="category" className="text-lg">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 w-48 border border-gray-300 rounded-md"
        >
          <option value="" disabled>Select category</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-lg">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 h-24 border border-gray-300 rounded-md"
        />
      </div>

      <button
        onClick={handleSendMessage}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Send Message
      </button>

      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-bold">Chat Log</h3>
        {chatLog.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          chatLog.map((log, index) => (
            <div key={index} className="p-2 border-b border-gray-300">
              <p className="text-sm">Category: {log.category}</p>
              <p className="text-sm">Message: {log.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Complains;
