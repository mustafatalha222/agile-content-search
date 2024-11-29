import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Results from './pages/Results/Results'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </Router>
  )
}
