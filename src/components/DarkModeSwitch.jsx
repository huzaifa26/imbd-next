"use client"
import React, { useEffect, useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs"
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [mounted,setMounted]=useState(false);

    useEffect(()=>setMounted(true),[]);
    
    return (
        <>
            {
                mounted && (currentTheme === "dark" ? <MdLightMode className='text-2xl cursor-pointer hover:text-amber-500' onClick={() => setTheme("light")} /> : <BsFillMoonFill className='text-2xl cursor-pointer hover:text-amber-500' onClick={() =>  setTheme("dark")} />)
            }
        </>
    )
}
