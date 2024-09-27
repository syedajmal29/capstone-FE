import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentProfile = () => {
  const [profile, setProfile] = useState({
    studentName: '',
    email: '',
    dob: '',
    percentage10th: '',
    percentage12th: '',
    collegeGPA: '',
    resume: null,
    academicRecords: null,
  });

  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [successMessage, setSuccessMessage] = useState(''); // Success message

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://placement-portal-m4o2.onrender.com/api/student/profile');
        // Ensure all fields have default values if missing
        const data = {
          studentName: response.data.studentName || '',
          email: response.data.email || '',
          dob: response.data.dob || '',
          percentage10th: response.data.percentage10th || '',
          percentage12th: response.data.percentage12th || '',
          collegeGPA: response.data.collegeGPA || '',
          resume: response.data.resume || null, // Load existing resume if available
          academicRecords: response.data.academicRecords || null, // Load existing academic records if available
        };
        setProfile(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load profile data.'); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setProfile((prevState) => ({ ...prevState, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // Append all form fields, including files, to FormData
    Object.keys(profile).forEach((key) => {
      if (profile[key] !== null) {
        formData.append(key, profile[key]);
      }
    });

    try {
      const response = await axios.post('https://placement-portal-m4o2.onrender.comapi/student/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage('Profile updated successfully'); // Set success message
      setProfile((prevState) => ({
        ...prevState,
        ...response.data, // Update profile fields (except files)
      }));
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile. Please try again.'); // Error message on submission failure
    }
  };

  if (loading) {
    return <div className="text-center">Loading profile...</div>; // Loading indicator
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; // Display error message
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md mt-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
        {/* Name */}
        <div>
          <label className="block text-lg text-gray-700 font-semibold mb-2">Name:</label>
          <input
            type="text"
            name="studentName"
            value={profile.studentName}
            onChange={handleInputChange}
            required // Make this field required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg text-gray-700 font-semibold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            required // Make this field required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-lg text-gray-700 font-semibold mb-2">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={profile.dob}
            onChange={handleInputChange}
            required // Make this field required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          />
        </div>

        {/* 10th Percentage */}
        <div>
          <label className="block text-lg text-gray-700 font-semibold mb-2">10th Percentage:</label>
          <input
            type="number"
            name="percentage10th"
            value={profile.percentage10th}
            onChange={handleInputChange}
            required // Make this field required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          />
        </div>

        {/* 12th Percentage */}
        <div>
          <label className="block text-lg text-gray-700 font-semibold mb-2">12th Percentage:</label>
          <input
            type="number"
            name="percentage12th"
            value={profile.percentage12th}
            onChange={handleInputChange}
            required // Make this field required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          />
        </div>

        {/* College GPA */}
        <div>
          <label className="block text-lg text-gray-700 font-semibold mb-2">College GPA:</label>
          <input
            type="number"
            step="0.01"
            name="collegeGPA"
            value={profile.collegeGPA}
            onChange={handleInputChange}
            required // Make this field required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-lg text-gray-700 font-semibold mb-2">Resume:</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Academic Records Upload */}
        <div>
          <label className="block text-lg text-gray-700 font-semibold mb-2">Academic Records:</label>
          <input
            type="file"
            name="academicRecords"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300">
          Save Changes
        </button>
      </form>

      {/* Success Message */}
      {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}

      {/* Profile Information Table */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Profile Information</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">Field</th>
              <th className="py-2 px-4 bg-gray-200">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border">Name</td>
              <td className="py-2 px-4 border">{profile.studentName || 'N/A'}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Email</td>
              <td className="py-2 px-4 border">{profile.email || 'N/A'}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Date of Birth</td>
              <td className="py-2 px-4 border">{profile.dob || 'N/A'}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">10th Percentage</td>
              <td className="py-2 px-4 border">{profile.percentage10th || 'N/A'}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">12th Percentage</td>
              <td className="py-2 px-4 border">{profile.percentage12th || 'N/A'}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">College GPA</td>
              <td className="py-2 px-4 border">{profile.collegeGPA || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProfile;
