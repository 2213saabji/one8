import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import HeroPage from '../Pages/HeroPage/index'
import ContextAllDataProvider from '../Components/ContextAllData/index'

export default function Navigation() {
  return (
    <div>
      <ContextAllDataProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HeroPage />} />
          </Routes>
      </BrowserRouter>
      </ContextAllDataProvider>
    </div>
  )
}
