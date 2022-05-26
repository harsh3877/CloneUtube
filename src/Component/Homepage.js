import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Videoes from './Videoes/Videoes'

const Homepage = () => {
  return (
    <div>
    <Header />
      <div className="main__display">
        <Sidebar />
        <Videoes />
      </div>
    </div>
  )
}

export default Homepage