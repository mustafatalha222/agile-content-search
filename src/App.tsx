import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Results from './pages/Results'
import ErrorBoundary from './pages/ErrorBoundary'

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
  )
}
