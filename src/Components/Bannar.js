import React from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";

function Bannar() {
  return (
    <div>
       <div className='text-sky-700 h-full p-10 bg-gradient-to-r from-[#a2fbff] to-[#eeeeee] flex flex-col items-center'>
        <p className='text-5xl mb-3 text-center'>Scan the</p>
        <p className='text-3xl mb-5 text-center'>Following QR Code!</p>
        <FaAngleDoubleDown size={50}/>
      </div>
    </div>
  )
}

export default Bannar
