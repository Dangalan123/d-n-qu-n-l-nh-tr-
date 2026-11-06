import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GuestHome from '../pages/GuestHome';
import Login from '../pages/Login';
import AdminDashboard from '../pages/AdminDashboard';

// Bạn có thể tách TenantDashboard và AdminDashboard ra file riêng sau, 
// hoặc giữ lại tạm thời các const dưới đây nếu chưa tạo file:
const TenantDashboard = () => <div className="p-8 text-center text-xl text-green-600 font-bold">Dashboard Người Thuê Phòng</div>;

export default function AppRoutes() {
  const isAuthenticated = false; 

  return (
    <Routes>
      <Route path="/" element={<GuestHome />} />
      <Route path="/login" element={<Login />} />

      <Route 
        path="/tenant" 
        element={isAuthenticated ? <TenantDashboard /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/admin" 
        element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" replace />} 
      />

      <Route path="*" element={<div className="p-8 text-center text-red-500">404 - Trang không tồn tại</div>} />
    </Routes>
  );
}