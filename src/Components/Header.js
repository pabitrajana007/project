import React from 'react';
import './Header.css';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='w-screen font p-2 flex flex-col justify-center'>
      <div className='w-[90%] flex flex-col md:flex-row p-2 items-center md:items-baseline justify-around mx-auto'>
        <Link to='/' className='text-2xl tracking-widest montserrat-font underline-2 underline-offset-2 decoration-blue-700'>Jobify</Link> {/* change Company name */}
        <div className='shadow flex items-center bg-white rounded-full h-full w-full md:w-[25%] mt-2 md:mt-0'>
          <input type='text' className='text-slate-800 p-2 rounded-l-full w-full indent-3 outline-0' placeholder='Search here....'/>
          <FaSearch className='shadow rounded-full bg-blue-500 p-2 text-white h-full w-9'/>
        </div>
        <button className='bg-green-500 hover:bg-green-400 px-4 py-2 rounded-full text-white font-bold mt-2 md:mt-0'>Admin Login</button>
      </div>
      <hr className='w-full my-2 bg-slate-800' />
      {/* banner */}
    </div>
  );
}

export default Header;
