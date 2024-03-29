import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import Home from './routes/Home'
import SignIn from './routes/Signin'
import SignUp from './routes/Signup'
import Account from './routes/Account'
import axios from 'axios'

const App = () => {
  const [coins, setCoins] = useState([])
  const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    })
  },[url])

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home coins={coins} />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={<Account />} />


      </Routes>
    </ThemeProvider>
  )
}

export default App