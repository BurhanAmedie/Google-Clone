import React from 'react'
import Image from "next/image"
import { MicrophoneIcon , XIcon } from "@heroicons/react/solid"
import { useRef } from 'react'
import { SearchIcon } from "@heroicons/react/outline"
import {useRouter} from "next/router"
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'


function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value; 
        if(!term) return;

        router.push(`/search?term=${term}`)
  }
    
    
    return (
        <header className= "sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image 
                src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                width= {120}
                height={40} 
                className="cursor-pointer"
                onClick= {() => router.push('/') }/>

                <form className="flex flex-grow px-6 py-3 ml-6 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl item-center ">
                    <input 
                    type="text" 
                    className='flex-grow w-full focus:outline-none'
                    ref={searchInputRef} 
                    defaultValue= {router.query.term} />

                    <XIcon 
                    className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                    onClick= {() => (searchInputRef.current.value ='')}
                    />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className=" h-6 hidden sm:inline-flex text-blue-500" />
                    <button hidden type='submit' onClick = {search}> Search</button>
                </form>
                <Avatar 
                className= "ml-auto" 
                url="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg" 
                 /> 
            </div>

            {/*options */}
            <HeaderOptions />
        </header>
        
    )
}

export default Header
