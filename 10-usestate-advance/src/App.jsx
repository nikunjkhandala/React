import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'nikunj', age:20})

  const btnClick = () => {
    const newNum = {...num};
    newNum.user = "neel";
    setNum(newNum) 
  }

  return (
    <div>
      <h1> {num.user},{num.age}  </h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App