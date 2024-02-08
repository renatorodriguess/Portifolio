'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { NavItem } from './nav-item';
import { ButtonEffect } from './buttoneffect';
import { motion } from "framer-motion"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projects'
    }
]



const Header = () => {
    return (
        <motion.header 
        className='absolute top-0 w-full z-10 h-24 flex items-center justify-center'
        initial={{ top: -100}}
        animate={{ top: 0}}
        transition={{ duration: 0.5 }}
        
        >
            <div className='container flex items-center justify-between'>
                <Link href="/">
                    <Image
                        width={100}
                        height={49}
                        src="/images/loogo.png"
                        alt='Logo'
                        className='hidden sm:block'
                    />
                </Link>


                <nav className='flex items-center gap-4 sm:gap-10'>
                    {NAV_ITEMS.map(item => (
                        <NavItem {...item} key={item.label} />
                    ))}

                </nav>
                
                <ButtonEffect />
            </div>

        </motion.header>
    )
}

export default Header;