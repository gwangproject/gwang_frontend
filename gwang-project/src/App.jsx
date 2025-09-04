import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main.jsx";
import { Login } from "./pages/Login.jsx";
import KakaoRedirect from "./pages/KakaoRredirect.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/oauth2/code/kakao" element={<KakaoRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
