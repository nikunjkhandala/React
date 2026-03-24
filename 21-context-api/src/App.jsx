import React from 'react'
import UserContext from './context/UseContext'
import UseContextProvider from './context/UseContextProvider'

const App = () => {
  return (
    <UseContextProvider>
      <h1>React with nikunj </h1>
    </UseContextProvider>
  )
}

export default App