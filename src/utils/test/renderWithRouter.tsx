import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

export const renderWithRouter = (ui: React.ReactNode) => render(<Router>{ui}</Router>)
