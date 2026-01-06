import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Recommendations from './pages/Recommendations'
import Login from './pages/Login'

export default function App(){
  return (
    <div style={{maxWidth: 980, margin: '0 auto', padding: 16, fontFamily: 'system-ui, sans-serif'}}>
      <header style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <h2>🎬 Zero Movie Recommender</h2>
        <nav style={{display:'flex', gap: 12}}>
          <Link to="/">Home</Link>
          <Link to="/recommendations">Recommendations</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </div>
  )
}
