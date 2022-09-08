import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import { fetchFruit } from '@/apiClient/fruits'
import App from '@/App'

vi.mock('@/apiClient/fruits')

describe('<App />', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders', () => {
    render(<App />, { wrapper: MemoryRouter })
    expect(screen.getByText(/dev/i)).toBeInTheDocument()
  })

  it('increments count correctly', async () => {
    render(<App />, { wrapper: MemoryRouter })

    expect(screen.getByText(/0/i)).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: /0/i }))

    expect(screen.getByText(/1/i)).toBeInTheDocument()
  })

  it('fetches fruits correctly', async () => {
    fetchFruit.mockReturnValue(Promise.resolve([{ id: 1, name: 'apple' }]))

    render(<App />, { wrapper: MemoryRouter })

    expect(screen.queryByText(/apple/i)).toBeNull()

    await userEvent.click(screen.getByRole('button', { name: /fetch/i }))

    expect(screen.getByText(/apple/i)).toBeInTheDocument()
  })
})
