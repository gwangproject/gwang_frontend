import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // 여기가 사용자님의 App.jsx 파일입니다.
import './index.css';

// 1. React Query에서 필요한 것들을 import 합니다.
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 2. QueryClient 인스턴스를 생성합니다.
const queryClient = new QueryClient();

// 3. ReactDOM.createRoot(...) 부분을 찾아서
//    <App />을 <QueryClientProvider>로 감싸줍니다.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);