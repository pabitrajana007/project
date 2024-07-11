import React from 'react';
import './Header.css';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='w-screen font p-2 flex flex-col justify-center'>
      <div className='w-[90%] flex flex-col md:flex-row p-2 items-center md:items-baseline justify-around mx-auto'>
        <Link to='/' className='text-2xl tracking-widest montserrat-font underline-2 underline-offset-2 decoration-blue-700'><b>MEGA</b>.Group</Link>
        <div className='shadow flex items-center bg-white rounded-md h-full w-full md:w-[25%] mt-2 md:mt-0'>
          <input type='text' className='text-slate-800 p-2 rounded-md w-full indent-3 outline-0' placeholder='Search here'/>
          <FaSearch className='shadow rounded-md bg-blue-400 p-2 text-white h-full w-10'/>
        </div>
        <button className='bg-sky-500 hover:bg-green-400 px-4 py-2 rounded-md text-white font-bold mt-2 md:mt-0'>Admin Login</button>
        <Link to='/employee-database'>
          <button className='bg-purple-500 hover:bg-purple-400 px-4 py-2 rounded-md text-white font-bold mt-2 md:mt-0 ml-2'>Employee Database</button>
        </Link>
      </div>
      <hr className='w-full my-2 bg-slate-800' />
    </div>
  );
}

export default Header;
