import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Home from "./components/Home";
import StudentDashboard from "./components/student/StudentDashboard";
import StudentProfile from "./components/student/StudentProfile";
import ApplicationForm from "./components/student/ApplicationForm";
import ApplicationStatus from "./components/student/ApplicationStatus";
import InterviewSchedule from "./components/student/InterviewSchedule";
import CompanyDashboard from "./components/company/CompanyDashboard";
import JobPostingForm from "./components/company/JobPostingForm";
import JobPostingList from "./components/company/JobPostingList";
import ApplicationReview from "./components/company/ApplicationReview";
import InterviewManagement from "./components/company/InterviewManagement";
import AdminDashboard from "./components/admin/AdminDashboard";
import PlacementDriveForm from "./components/admin/PlacementDriveForm";
import PlacementDriveList from "./components/admin/PlacementDriveList";
import RecruitmentStatus from "./components/admin/RecruitmentStatus";
import PlacementDriveDetails from "./components/placement/PlacementDriveDetails";
import InterviewScheduler from "./components/placement/InterviewScheduler";
import InterviewList from "./components/placement/InterviewList";
import NotificationComponent from "./components/placement/NotificationComponent";
import ReportsDashboard from "./components/reports/ReportDashboard";
import ChartComponent from "./components/reports/ChartComponent";
import DashboardLayout from './components/shared/DashboardLayout';
import { useUser } from "./context/userContext"; 
import { UserContextProvider } from "./context/userContext";
import ProtectedRoute from './components/shared/ProtectedRoute'; // Import the ProtectedRoute component

function App() {
  const { user } = useUser();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={!user ? <Home /> : <Navigate to="/dashboard" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />

        {/* Student Dashboard Routes */}
        <Route path="student" element={<DashboardLayout type="student" />}>
          <Route path="dashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
          <Route path="profile" element={<ProtectedRoute><StudentProfile /></ProtectedRoute>} />
          <Route path="apply" element={<ProtectedRoute><ApplicationForm /></ProtectedRoute>} />
          <Route path="applications" element={<ProtectedRoute><ApplicationStatus /></ProtectedRoute>} />
          <Route path="interviews" element={<ProtectedRoute><InterviewSchedule /></ProtectedRoute>} />
        </Route>

        {/* Company Dashboard Routes */}
        <Route path="company" element={<DashboardLayout type="company" />}>
          <Route path="dashboard" element={<ProtectedRoute><CompanyDashboard /></ProtectedRoute>} />
          <Route path="job-postings" element={<ProtectedRoute><JobPostingList /></ProtectedRoute>} />
          <Route path="job-postings/new" element={<ProtectedRoute><JobPostingForm /></ProtectedRoute>} />
          <Route path="applications" element={<ProtectedRoute><ApplicationReview /></ProtectedRoute>} />
          <Route path="interviews" element={<ProtectedRoute><InterviewManagement /></ProtectedRoute>} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="admin" element={<DashboardLayout type="admin" />}>
          <Route path="dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="placement-drives" element={<ProtectedRoute><PlacementDriveList /></ProtectedRoute>} />
          <Route path="placement-drives/new" element={<ProtectedRoute><PlacementDriveForm /></ProtectedRoute>} />
          <Route path="placement-drives/:id" element={<ProtectedRoute><PlacementDriveDetails /></ProtectedRoute>} />
          <Route path="recruitment-status" element={<ProtectedRoute><RecruitmentStatus /></ProtectedRoute>} />
          <Route path="interview-scheduler" element={<ProtectedRoute><InterviewScheduler /></ProtectedRoute>} />
          <Route path="interview-list" element={<ProtectedRoute><InterviewList /></ProtectedRoute>} />
          <Route path="notifications" element={<ProtectedRoute><NotificationComponent /></ProtectedRoute>} />
          <Route path="reports" element={<ProtectedRoute><ReportsDashboard /></ProtectedRoute>} />
          <Route path="charts" element={<ProtectedRoute><ChartComponent /></ProtectedRoute>} />
        </Route>

        {/* Redirect to dashboard if user is logged in */}
        <Route path="/dashboard" element={user ? (
          user.role === 'admin' ? <Navigate to="/admin/dashboard" /> :
          user.role === 'company' ? <Navigate to="/company/dashboard" /> :
          <Navigate to="/student/dashboard" />
        ) : (
          <Navigate to="/" />
        )} />
      </Routes>
    </Layout>
  );
}

export default function WrappedApp() {
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
}
