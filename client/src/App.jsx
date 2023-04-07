import { useState } from 'react'
import Header from './components/Header'
import HeaderSecond from './components/HeaderSecond'
import Article from './components/Article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HeaderSecond/>
      <Article/>
    </>
  )
}

export default App
