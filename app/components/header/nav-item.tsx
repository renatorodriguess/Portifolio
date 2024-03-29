import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/app/lib/utils';

type NavItemProps = {
    label: string;
    href: string;
}



export const NavItem = ({ label, href }: NavItemProps) => {
    const pathname = usePathname()

    const isActive = pathname === href;

    return (
        <Link href={href} className={cn(
            "flex text-gray-400 items-center gap-2 font-medium font-mono",
            isActive && "text-gray-50",
        )}>
            <span className='text-emerald-400'>#</span>
            {label}
        </Link>
    )
}
