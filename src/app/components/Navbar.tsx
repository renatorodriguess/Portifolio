'use client'

import Logo from '../assets/logo.png'
import { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsDownload, BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from "react-scroll/modules";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[100px] flex justify-between items-center px-5 bg-[#0a192f] text-gray-300 '>
            <Link to='home' smooth={true} duration={500}>
                <div>
                    <img src={Logo} alt='Logo image' className='cursor-pointer' style={{width: '250px'}} />
                </div>
            </Link>
    
            {/* menu */}
                <ul className='text-[22px] hidden md:flex'>
                    <li>
                        <Link className='border-b-2 border-transparent hover:border-pink-700 transition duration-400 ease-in-out' to='home'  smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                    <Link className='border-b-2 border-transparent hover:border-pink-700 transition duration-400 ease-in-out' to='about' smooth={true} duration={500}>
                            Sobre
                        </Link>
                    </li>
                    <li>
                    <Link className='border-b-2 border-transparent hover:border-pink-700 transition duration-400 ease-in-out' to='skills' smooth={true} duration={500}>
                            Habilidades
                        </Link>
                    </li>
                    <li>
                    <Link className='border-b-2 border-transparent hover:border-pink-700 transition duration-400 ease-in-out' to='work' smooth={true} duration={500}>
                            Projetos
                        </Link>
                    </li>
                    <li>
                    <Link className='border-b-2 border-transparent hover:border-pink-700 transition duration-400 ease-in-out' to='contact' smooth={true} duration={500}>
                            Contato
                        </Link>
                    </li>
                </ul>
    
            {/* icon */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
    
            {/* Mobile Menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <ul>
                    <li className='py-4 text-4xl'>
                        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                            Home
                        </Link></li>
                    <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                            Sobre
                        </Link>
                    </li>
                    <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                            Habilidades
                        </Link>
                    </li>
                    <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                            Projetos
                        </Link>
                    </li>
                    <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                            Contato
                        </Link>
                    </li>
                </ul>
            </div>
    
            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/renato-rodrigues-2240251b5/" target='_blank'>
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/renatorodriguess" target='_blank'>
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <Link className='flex justify-between items-center w-full text-gray-300' to='contact' smooth={true} duration={500}>
                        E-Mail <HiOutlineMail size={30}/>
                        </Link>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    
                    </li>
                </ul>
            </div>
    
        </div>
      )
}

export default Navbar;