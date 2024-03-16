"use client"
import { IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';

export default function MobileNavLink() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex lg:hidden items-center'>
            <Button variant="link" onClick={() => setIsOpen(!isOpen)} className=' px-2 translate-x-2'>
                { isOpen ? <IconX size={30}/>  : <IconMenu2 size={30}/>}
            </Button>
            { isOpen && <DropDownNavLink /> }
        </div>
    )
}

function DropDownNavLink() {
    return (
        <div className='w-full h-fit absolute top-16 left-0 flex flex-col gap-4 p-5 items-center justify-center bg-white'>
            <Link href={""} className="text-c0 hover:underline">Search</Link>
            <Link href={""} className="text-c0 hover:underline">About Us</Link>
            <Link href={""} className="text-c0 hover:underline">Log in</Link>
            <Button variant="default" className='w-fit'>Sign Up</Button>
        </div>
    )
}