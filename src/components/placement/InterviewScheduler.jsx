import React, { useState } from "react";

// Mock available interview slots
const mockSlots = [
  { date: "October 17, 2024", time: "10:00 AM - 11:00 AM" },
  { date: "October 18, 2024", time: "2:00 PM - 3:00 PM" },
  { date: "October 19, 2024", time: "11:00 AM - 12:00 PM" }
];

const InterviewScheduler = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    alert(`You have selected the slot: ${slot.date} at ${slot.time}`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Schedule an Interview</h1>
      <ul>
        {mockSlots.map((slot, index) => (
          <li
            key={index}
            className={`p-2 my-2 cursor-pointer ${
              selectedSlot === slot ? "bg-green-100" : ""
            }`}
            onClick={() => handleSlotSelect(slot)}
          >
            {slot.date} - {slot.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewScheduler;
