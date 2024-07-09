import React from 'react';
import { TiTick } from "react-icons/ti";

function Form() {
  return (
    <div className='w-screen h-screen bg-green-100 flex justify-center items-center '> 
      <div className='lg:w-3/4 md:w-2/3 sm:w-11/12 w-full p-4 relative'>
        <div className='flex justify-start mb-4'>
          <TiTick className='bg-green-500 absolute -left-1 text-white rounded-full' size={70}/>
        </div>
        <div className='bg-slate-300  rounded-lg shadow-md'>
          <form className=' p-6 rounded-lg'>
            <h1 className='text-2xl font-bold mb-4'>FORM B</h1>
            <div className='flex flex-col space-y-4  '>
              <div className=' p-4 rounded-lg flex flex-col  border-2'>
                <p className='text-red-600 font-bold mb-4'>Personal Information</p>
                <div className='flex flex-col space-y-2'>
                  <label htmlFor='name'>Name *</label>
                  <input type='text' placeholder='Enter name' id='name' name='name' className='rounded-full indent-2 p-2 border'/>
                  <label>Gender *</label>
                  <div className='flex space-x-4  justify-center'>
                    <div className='flex items-center  space-x-1'>
                      <input type='radio' id='male' name='gender' className='mt-1'/>
                      <label htmlFor='male'>Male</label>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <input type='radio' id='female' name='gender' className='mt-1'/>
                      <label htmlFor='female'>Female</label>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <input type='radio' id='others' name='gender' className='mt-1'/>
                      <label htmlFor='others'>Others</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className=' p-4 rounded-lg'>
                <p className='text-red-600 font-bold mb-4'>Contact Details</p>
                <div className='flex flex-col space-y-2'>
                  <label htmlFor='email'>Email *</label>
                  <input type='email' placeholder='Enter email' id='email' name='email' className='rounded-xl indent-2 p-2 border'/>
                  <label htmlFor='address'>Address *</label>
                  <input type='text' placeholder='Enter address' id='address' name='address' className='rounded-xl indent-2 p-2 border'/>
                  <label htmlFor='country'>Country *</label>
                  <input type='text' placeholder='Enter country' id='country' name='country' className='rounded-xl indent-2 p-2 border'/>
                  <label htmlFor='zip_code'>Zip Code *</label>
                  <input type='text' placeholder='Enter pin code' id='zip_code' name='zip_code' className='rounded-xl indent-2 p-2 border'/>
                </div>
              </div>

              <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-full'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;
