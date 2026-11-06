import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // 1. Import BrowserRouter vào đây
import { store } from './store/index.js';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* 2. Bọc thẻ BrowserRouter ở ngoài cùng */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);