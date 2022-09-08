import './App.css'

import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import * as api from './apiClient/fruits'
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
        <Routes>
          <Route path='/' element={<HomeRoute />} />
          <Route path='hello' element={<SecondRoute />} />
        </Routes>
        <img src={logo} alt='Dev Academy Logo' className='App-logo' />
        <h2>Hello DEV</h2>
        <div>
          Count is{' '}
          <button onClick={() => setCount((count) => count + 1)}>
            {count}
          </button>
          <hr />
          <div>
            <button onClick={fetchFruit}>Fetch Fruits</button>
          </div>
          {fruits.map((fruit) => (
            <div key={fruit.id}>
              {fruit.name}: {fruit.color}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HomeRoute() {
  return (
    <div>
      <h2>Home Route</h2>
      <Link to='hello'>Go to a second route</Link>
    </div>
  )
}

function SecondRoute() {
  return (
    <div>
      <h2>Second Route</h2>
      <Link to='..'>Go back home</Link>
    </div>
  )
}

export default App
