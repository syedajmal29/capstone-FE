import React, { useEffect, useState } from "react";

const PlacementDriveList = () => {
  // Sample data to simulate backend response
  const mockDrives = [
    { id: 1, name: "Tech Giants Drive", date: "2024-10-15", status: "Upcoming" },
    { id: 2, name: "FinTech Innovators Drive", date: "2024-09-25", status: "Ongoing" },
    { id: 3, name: "E-Commerce Hiring", date: "2024-11-05", status: "Upcoming" },
  ];

  const [drives, setDrives] = useState([]); // Initialize with an empty array

  useEffect(() => {
    // Simulate an API call with mock data
    setTimeout(() => {
      setDrives(mockDrives); // Set mock data after a delay to mimic fetching from API
    }, 1000);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center mt-12">
      <h1 className="text-3xl font-bold mb-6">Placement Drive List</h1>
      {drives.length > 0 ? (
        <ul className="space-y-4 w-full max-w-3xl">
          {drives.map((drive) => (
            <li
              key={drive.id}
              className="bg-white p-6 shadow-md rounded-lg flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{drive.name}</h2>
                <p className="text-gray-600">Date: {new Date(drive.date).toLocaleDateString()}</p>
                <p className={`text-sm mt-2 ${drive.status === 'Upcoming' ? 'text-green-500' : 'text-blue-500'}`}>
                  Status: {drive.status}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-500">Loading placement drives...</p>
      )}
    </div>
  );
};

export default PlacementDriveList;
