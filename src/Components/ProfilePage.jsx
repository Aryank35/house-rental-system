import React from 'react';

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white shadow-md p-4">
        <div className="flex items-center">
          <img
            className="w-20 h-20 rounded-full border-2 border-white"
            src="https://via.placeholder.com/80" // replace with actual image URL
            alt="Profile"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Preeti Patel</h2>
            <div className="flex space-x-4 mt-1">
              <div>
                <span className="block text-gray-600">Feeds</span>
                <span className="block font-bold">13</span>
              </div>
              <div>
                <span className="block text-gray-600">Connections</span>
                <span className="block font-bold">77</span>
              </div>
              <div>
                <span className="block text-gray-600">Rewards</span>
                <span className="block font-bold">1900</span>
              </div>
            </div>
          </div>
          <button className="ml-auto p-2 bg-blue-500 text-white rounded-md">Edit</button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md mt-2">
        <div className="flex justify-around text-center">
          <div className="py-2 px-4 border-b-4 border-blue-500">HOME</div>
          <div className="py-2 px-4">ABOUT</div>
          <div className="py-2 px-4">GALLERY</div>
          <div className="py-2 px-4">EVENTS</div>
          <div className="py-2 px-4">GROUPS</div>
        </div>
      </div>

      {/* Education Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Education</h3>
        <div className="bg-white shadow-md p-4 rounded-md">
          <div className="mb-4">
            <div className="flex justify-between">
              <span className="text-blue-500 font-semibold">White House Public School</span>
              <button className="text-blue-500">Edit</button>
            </div>
            <p className="text-gray-600">11th, Science</p>
            <p className="text-gray-600">94%, 1996</p>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="text-blue-500 font-semibold">M K V School of Health Wellness</span>
              <button className="text-blue-500">Edit</button>
            </div>
            <p className="text-gray-600">Health care, Science</p>
            <p className="text-gray-600">99%, 1996</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around py-2">
        <div className="flex flex-col items-center text-blue-500">
          <i className="fas fa-home"></i>
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <i className="fas fa-book"></i>
          <span className="text-xs">Academics</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <i className="fas fa-globe"></i>
          <span className="text-xs">OctoWorld</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <i className="fas fa-bell"></i>
          <span className="text-xs">Notifications</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
