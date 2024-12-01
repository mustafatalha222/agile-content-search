import { render } from '@testing-library/react'
import App from './App'

test('Renders the App', () => {
  render(<App />)
  expect(true).toBeTruthy()
})
