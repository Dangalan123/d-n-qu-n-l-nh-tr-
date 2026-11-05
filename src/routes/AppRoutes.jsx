import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GuestHome from '../pages/GuestHome';

const Login = () => <div className="p-8 text-center text-xl font-bold">Trang Đăng Nhập</div>;
const TenantDashboard = () => <div className="p-8 text-center text-xl text-green-600 font-bold">Dashboard Người Thuê Phòng</div>;
const AdminDashboard = () => <div className="p-8 text-center text-xl text-blue-600 font-bold">Dashboard Chủ Trọ / Quản Lý</div>;

export default function AppRoutes() {
  // Giả lập trạng thái đăng nhập
  const isAuthenticated = false; 

  return (
    <Routes>
      <Route path="/" element={<GuestHome />} />
      <Route path="/login" element={<Login />} />

      {/* Nếu chưa đăng nhập mà cố vào /tenant hoặc /admin thì Navigate chuyển hướng về /login */}
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