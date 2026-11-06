import React from 'react';
import { useSelector } from 'react-redux';

export default function AdminDashboard() {
  const rooms = useSelector((state) => state.rooms.rooms);

  const totalRooms = rooms.length;
  const occupiedRooms = rooms.filter((r) => r.status === 'occupied').length;
  const availableRooms = rooms.filter((r) => r.status === 'available').length;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dashboard Quản Lý Phòng Trọ
        </h1>

        {/* Khối thống kê tổng quan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Tổng số phòng</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">{totalRooms}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Đang cho thuê</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">{occupiedRooms}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Phòng còn trống</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{availableRooms}</p>
          </div>
        </div>

        {/* Danh sách phòng trọ */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Danh sách phòng</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
              + Thêm phòng mới
            </button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-xs uppercase font-semibold">
                <th className="p-4">Tên phòng</th>
                <th className="p-4">Giá thuê (VNĐ)</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4">Người thuê</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {rooms.map((room) => (
                <tr key={room.id} className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-800">{room.name}</td>
                  <td className="p-4 text-gray-600">{room.price.toLocaleString()} đ</td>
                  <td className="p-4">
                    {room.status === 'occupied' && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Đã thuê
                      </span>
                    )}
                    {room.status === 'available' && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Còn trống
                      </span>
                    )}
                    {room.status === 'maintenance' && (
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Bảo trì
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-gray-600">{room.tenant || '---'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}