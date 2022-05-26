import React from 'react'
import Header from './Header/Header'
import Watch from './Watch/Watch'

const Videopage = () => {
  return (
    <div>
    <Header />
    <div className='watch__display' style={{}}>
      <Watch />
    </div>
    </div>
  )
}

export default Videopage