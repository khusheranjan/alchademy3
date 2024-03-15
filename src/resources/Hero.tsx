import React from 'react'
import {herobg} from '@/assets'
import Image from 'next/image'
import Mbutton from './Mbutton'

function Hero() {
    return (
        <div className="relative h-screen flex items-center">
            <div className="absolute inset-0">
                <Image src={herobg} alt='hero' />
            </div>
            <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 py-12 ">
                    <h1 className="text-black dark:text-black text-6xl pb-4 font-bold">Welcome to Alchademy!</h1>
                    <p className="text-black dark:text-black text-2xl font-medium mt-4 w-[60%]">Transforming education through technology. Learn anytime, anywhere with the help of AI.</p>
                    <Mbutton />
                </div>
            </div>
        </div>
    )
}

export default Hero
