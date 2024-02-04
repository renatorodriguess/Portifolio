'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { NavItem } from './nav-item';
import { ButtonEffect } from './buttoneffect';


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
        <header className='absolute top-0 w-full z-10 h-24 flex items-center justify-center'>
            <div className='container flex items-center justify-between'>
                <Link href="/">
                    <Image
                        width={58}
                        height={49}
                        src="/images/logo.svg"
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

        </header>
    )
}

export default Header;