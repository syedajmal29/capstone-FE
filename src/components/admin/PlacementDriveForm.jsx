import React, { useState } from 'react';
import axios from 'axios';

const PlacementDriveForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [companies, setCompanies] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/placement-drives', { title, date, companies });
            alert('Placement drive created successfully!');
            // Reset form or redirect
            setTitle('');
            setDate('');
            setCompanies([]);
        } catch (error) {
            console.error('Error creating placement drive:', error);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center ">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create Placement Drive</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Drive Title</label>
                        <input
                            type="text"
                            placeholder="Enter drive title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
                    >
                        Create Drive
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PlacementDriveForm;
