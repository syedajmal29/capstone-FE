import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecruitmentStatus = () => {
    const [statusData, setStatusData] = useState({});

    const fetchStatus = async () => {
        try {
            const response = await axios.get('/api/recruitment-status');
            setStatusData(response.data);
        } catch (error) {
            console.error('Error fetching recruitment status:', error);
        }
    };

    useEffect(() => {
        fetchStatus();
    }, []);

    return (
        <div className="p-6 bg-white shadow-md rounded-md mt-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Recruitment Status</h1>
            <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-lg font-semibold text-gray-700">Total Students Placed:</p>
                    <p className="text-2xl font-bold text-blue-600">{statusData.totalPlaced || 0}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-lg font-semibold text-gray-700">Total Offers Accepted:</p>
                    <p className="text-2xl font-bold text-green-600">{statusData.totalOffersAccepted || 0}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-lg font-semibold text-gray-700">Placement Success Rate:</p>
                    <p className="text-2xl font-bold text-indigo-600">{statusData.successRate || 0}%</p>
                </div>
            </div>
        </div>
    );
};

export default RecruitmentStatus;
