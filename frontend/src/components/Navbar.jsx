import React from 'react'
import { Link } from 'react-router-dom'
import { BiMenu, BiX } from 'react-icons/bi'


const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const menuToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b bg-[rgb(224,226,237)] px-16 py-4 text-black md:justify-evenly">
      <a href="/" className='cursor-pointer opacity-70 transition-all duration-300 text-2xl font-semibold hover:opacity-100'>Daily Dose</a>
      <ul className='hidden md:flex gap-10'>
        <li> <Link to ="/" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Home</Link></li>
        <li> <Link to ="/createaccount" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Create Account</Link></li>
        <li> <Link to ="/signin" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Sign In</Link></li>
      </ul>

      {isOpen ? (
        <BiX onClick={menuToggle} className="block md:hidden text-4xl" />
      ) : (
        <BiMenu onClick={menuToggle} className="block md:hidden text-4xl" />
      )}


      {isOpen && (<div className={`fixed right-0 top-[65px] flex h-screen w-full flex-col items-start justify-start gap-10 border-l border border-x-gray-800 bg-[rgb(224,226,237)] ${
            isOpen ? "block" : "hidden"
          }`}>
        <ul className='bg-[rgb(224,226,237)] h-full w-screen font-medium text-xl text-center flex-col gap-10 p-10'>
          <li> <Link to ="/" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Home</Link></li>
          <li> <Link to ="/createaccount" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Create Account</Link></li>
          <li> <Link to ="/signin" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>Sign In</Link></li>
        </ul>
      </div>)
      }



    </nav>
  )
}

export default Navbar
