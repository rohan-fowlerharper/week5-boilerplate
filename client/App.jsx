import { useState } from 'react'
import logo from './logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        </div>
      </div>
    </div>
  )
}

export default App
