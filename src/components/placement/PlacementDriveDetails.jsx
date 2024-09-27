import React from "react";

// Mock data for testing
const mockDrive = {
  name: "2024 Fall Placement Drive",
  date: "October 15, 2024",
  status: "Ongoing",
  companies: ["Google", "Amazon", "Microsoft"],
  applicants: 120
};

const PlacementDriveDetails = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-12" >
      <h1 className="text-2xl font-bold mb-4">{mockDrive.name}</h1>
      <p><strong>Date:</strong> {mockDrive.date}</p>
      <p><strong>Status:</strong> {mockDrive.status}</p>
      <p><strong>Participating Companies:</strong> {mockDrive.companies.join(", ")}</p>
      <p><strong>Number of Applicants:</strong> {mockDrive.applicants}</p>
    </div>
  );
};

export default PlacementDriveDetails;
