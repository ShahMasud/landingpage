import React from 'react'

const Banner = () => {
  return (
   <div className='d-flex justify-content-center align-items-center text-center banner p-5 text-white mb-5'>
         <div style={{}} className=''>
            <p style={{letterSpacing:"5px"}} className='fs-2'>ESCAPE TO AN ENCHANTING WATERFRONT HEAVEN</p>
            <h1 style={{letterSpacing:"10px"}} className='mb-3 fs-1'>SOUTH BAY </h1>
            <h3 style={{letterSpacing:"5px"}} className='mb-5'>DUBAI SOUTH</h3>
            <h3 style={{fontWeight:"bold"}} className='mb-3'>SPACIOUS 3-7BR TOWNHOUSES, VILLAS AND GORGEOUS MANSIONS</h3>
            <h2 style={{letterSpacing:"5px"}} className='mb-5'>STARTING AED 2.3 Million</h2>

            <button type="button" class="btn btn-warning btn-lg">Learn More</button>
    </div>
   </div>
  )
}

export default Banner