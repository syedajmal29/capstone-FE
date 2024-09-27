import React from 'react';

const ProfileCard = ({ name, email, role }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 text-center">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 mt-2 text-sm">
        {role}
      </span>
    </div>
  );
};

export default ProfileCard;
