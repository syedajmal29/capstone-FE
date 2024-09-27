import React from "react";

// Mock data for notifications
const mockNotifications = [
  { message: "Your interview with Google is scheduled for October 17.", date: "October 12, 2024" },
  { message: "New placement drive: 2024 Fall Placement Drive", date: "October 1, 2024" },
  { message: "Amazon has reviewed your application.", date: "September 30, 2024" }
];

const NotificationComponent = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ul>
        {mockNotifications.map((notification, index) => (
          <li key={index} className="p-2 border-b">
            <p>{notification.message}</p>
            <p className="text-sm text-gray-500">{notification.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;
