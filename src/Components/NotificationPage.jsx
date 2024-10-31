import { useState } from 'react';
import { FiCheckCircle, FiBell } from 'react-icons/fi'; // Using icons for better UX

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Rent Payment Due',
      message: 'Your rent payment is due on the 1st of the month.',
      read: false,
    },
    {
      id: 2,
      title: 'Maintenance Request',
      message: 'We have received your maintenance request and will attend to it shortly.',
      read: false,
    },
    {
      id: 3,
      title: 'Lease Renewal',
      message: 'Your lease is up for renewal. Please contact us to discuss the terms.',
      read: false,
    },
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 bg-white rounded-lg shadow-lg text-gray-700 font-sans font-medium">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">Notifications</h1>
        <button
          onClick={handleMarkAllAsRead}
          className="sm:text-sm text-xs font-semibold text-indigo-600 bg-indigo-100 hover:bg-indigo-600 hover:text-white sm:px-4 px-2 py-2 rounded-md transition-all duration-300"
        >
          Mark All as Read
        </button>
      </div>

      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`p-4 rounded-lg shadow-lg transition-transform transform ${
              notification.read ? 'bg-gray-100' : 'bg-indigo-50'
            } hover:scale-105`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                {notification.read ? (
                  <FiCheckCircle className="text-green-500 mr-2" />
                ) : (
                  <FiBell className="text-yellow-500 mr-2" />
                )}
                {notification.title}
              </h2>
              <button
                className={`text-sm font-medium px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ${
                  notification.read
                    ? 'text-gray-500 bg-gray-200 cursor-not-allowed'
                    : 'text-indigo-600 bg-indigo-100 hover:bg-indigo-600 hover:text-white'
                }`}
                onClick={() => handleMarkAsRead(notification.id)}
                disabled={notification.read}
              >
                {notification.read ? 'Read' : 'Mark as Read'}
              </button>
            </div>
            <p className="mt-2 text-gray-700">{notification.message}</p>
            {!notification.read && (
              <div className="mt-4 bg-yellow-100 text-yellow-700 p-2 rounded-lg">
                <p>New Notification - Please check</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;
