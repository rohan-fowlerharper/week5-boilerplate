import './App.css'

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import * as api from '@/apiClient/fruits'

import logo from './logo.png'

function App() {
  const [count, setCount] = useState(0)
  const [fruits, setFruits] = useState([])

  async function fetchFruit() {
    const data = await api.fetchFruit()
    setFruits(data)
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} alt='Dev Academy Logo' className='App-logo' />
        <h2>Hello DEV</h2>
        <div>
          Count is{' '}
          <button onClick={() => setCount((count) => count + 1)}>
            {count}
          </button>
          <button onClick={fetchFruit}>Fetch Fruits</button>
          {fruits.map((fruit) => (
            <div key={fruit.id}>
              {fruit.name}: {fruit.color}
            </div>
          ))}
          <Routes>
            <Route
              path='hello'
              element={
                <div>
                  hello world this is a second route, this works on refresh
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
