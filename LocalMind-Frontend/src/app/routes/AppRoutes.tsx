<<<<<<< HEAD
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../features/Dashboard/V1/Component/Pages/HomePage'
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/Dashboard/V1/Component/Pages/HomePage";
import ChatPage from "../../pages/chat/ChatPage"; // ✅ Add ChatPage import
>>>>>>> d6100c6d3a5d5b04ffda8705b9c6f567cb8e7643

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<HomePage />} />

      {/* Chat Page */}
      <Route path="/chat" element={<ChatPage />} />  {/* ✅ New route */}
    </Routes>
  )
}

export default AppRoutes
