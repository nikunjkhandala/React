import React from 'react'

const Navbar = (props) => {
  return (
      <div>
   
          <button onChange={() => {
              props.setTheme('Drak')
          }
          }>Change Theme</button>
    </div>
  )
}

export default Navbar