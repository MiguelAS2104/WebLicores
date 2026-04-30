import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Sensorial from "./pages/Sensorial"
import Cocteles from "./pages/Cocteles"

import "./App.css"

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/sensorial" element={<Sensorial />} />

      <Route path="/cocteles" element={<Cocteles />} />

    </Routes>
  )
}

export default App