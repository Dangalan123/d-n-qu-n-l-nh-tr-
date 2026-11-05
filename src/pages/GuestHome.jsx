// src/pages/guest/GuestHome.jsx
import  { useState } from 'react';

export default function GuestHome() {
  const [priceFilter, setPriceFilter] = useState('');
  const [areaFilter, setAreaFilter] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header & Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">Trọ Sạch Sẽ</div>
          <div>
            <a href="/login" className="text-gray-600 hover:text-blue-600 font-medium">Đăng nhập</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        <section className="mb-8 bg-blue-50 p-6 rounded-xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tìm kiếm phòng trọ lý tưởng</h1>
          {/* Form lọc giá và diện tích */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Khoảng giá</label>
              <input 
                type="text" 
                placeholder="VD: Dưới 3 triệu" 
                className="w-full border rounded-lg px-3 py-2"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Diện tích</label>
              <input 
                type="text" 
                placeholder="VD: Trên 20m2" 
                className="w-full border rounded-lg px-3 py-2"
                value={areaFilter}
                onChange={(e) => setAreaFilter(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Danh sách phòng trống */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Phòng trống hiện có</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Component thẻ phòng (Sẽ map dữ liệu từ API của Thành viên 3 sau) */}
            <article className="bg-white border rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900">Phòng 101</h3>
              <p className="text-gray-600 text-sm mt-1">Diện tích: 22m²</p>
              <p className="text-blue-600 font-semibold mt-2">2.500.000 VNĐ / tháng</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Để lại thông tin liên hệ
              </button>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 text-center text-gray-500 text-sm">
        &copy; 2026 Quản lý Nhà Trọ. All rights reserved.
      </footer>
    </div>
  );
}