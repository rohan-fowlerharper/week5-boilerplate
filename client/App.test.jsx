import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '@/App'

describe('<App />', () => {
  it('renders', () => {
    render(<App />)
    expect(screen.getByText(/dev/i)).toBeInTheDocument()
  })
  it('increments count correctly', async () => {
    render(<App />)
    expect(screen.getByText(/0/i)).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText(/1/i)).toBeInTheDocument()
  })
})
