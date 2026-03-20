import React from 'react'

const Navbar = () => {
  return (
    <div className="flex py-4 items-center px-8 bg-cyan-900 justify-between">
      <h2>Nikunj</h2>
      <div className="flex gap-8">
        <a className="text-xl font-bold" href="/">
          Home
        </a>
        <a className="text-xl font-bold" href="/about">
          About
        </a>
        <a className="text-xl font-bold" href="/contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar