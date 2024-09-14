import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  function add1() {
    setCount(count + 1)
  }

  return (
    <>
    <div className="px-20 w-screen bg-black h-screen"> 
    <Button onClick={add1}>{count}</Button>
    </div>
    </>
  )
}

export default App
