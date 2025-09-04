import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Main from './Pages/Main.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />   
      </Routes>   
    </BrowserRouter>
  )
}

export default App
