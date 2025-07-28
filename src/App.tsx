import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import Marketplace from './pages/Marketplace'
import Blog from './pages/Blog'
import PayoutSystem from './pages/PayoutSystem'
import AdminPanel from './pages/AdminPanel'
import Navigation from './components/layout/Navigation'

function App() {
  const [userRole, setUserRole] = useState<'trafficker' | 'model-agency'>('trafficker')

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation userRole={userRole} setUserRole={setUserRole} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard userRole={userRole} />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/payouts" element={<PayoutSystem />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App