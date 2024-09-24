

import { useState } from 'react';

const defaultProfile = {
  photo: 'https://i.postimg.cc/TYBN5TwL/Aryan.webp',
  name: 'Aryan kumar Mohapatra',
  roomNumber: '101',
  phoneNumber: '1234567890',
  address: '123 Main St',
  numberOfMembers: '3',
  dateOfAdmission: '2022-01-01',
  profession: 'Software Engineer',
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md text-gray-700 font-sans">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={profile.photo}
          alt="Profile Photo"
          className="w-16 h-16 rounded-full border border-gray-300"
        />
        <h2 className="text-xl font-bold">{profile.name}</h2>
      </div>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h3 className="text-lg font-bold mb-2">Profile Information</h3>
        {isEditing ? (
          <form>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">Room Number:</label>
              <input
                type="text"
                name="roomNumber"
                value={profile.roomNumber}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-sm font-medium">Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-sm font-medium">Address:</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-sm font-medium">Number of Members:</label>
              <input
                type="text"
                name="numberOfMembers"
                value={profile.numberOfMembers}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-sm font-medium">Date of Admission:</label>
              <input
                type="date"
                name="dateOfAdmission"
                value={profile.dateOfAdmission}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="text-sm font-medium">Profession:</label>
              <input
                type="text"
                name="profession"
                value={profile.profession}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Save
            </button>
          </form>
        ) : (
          <div>
            <p className="text-sm font-medium">Room Number: {profile.roomNumber}</p>
            <p className="text-sm font-medium mt-2">Phone Number: {profile.phoneNumber}</p>
            <p className="text-sm font-medium mt-2">Address: {profile.address}</p>
            <p className="text-sm font-medium mt-2">Number of Members: {profile.numberOfMembers}</p>
            <p className="text-sm font-medium mt-2">Date of Admission: {profile.dateOfAdmission}</p>
            <p className="text-sm font-medium mt-2">Profession: {profile.profession}</p>
            <button
              type="button"
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 mt-4"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;