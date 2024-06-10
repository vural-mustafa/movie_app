'use client'
import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';


const Header = () => {
    const[keyword,setKeyword]=useState('');
    const router =useRouter();
    const menu=[
        {
            name:'About',
            url:'/about'
        },
        {
            name:'Sign In',   //Map etmek icin gerekli yonlendirmeler olusturuldu.
            url:'/login'
        }

    ]

    const searchFunc = (e)=>{
        if(e.key ==='Enter' && keyword.length>=3){    //SeARCH icine 3 karakterden az yazılırsa hicbir tarafa yonlendirme demek
            router.push(`/search/${keyword}`)
            setKeyword('')
        }
    } 

    return (
      
        <div className='flex items-center gap-8 h-20 p-5'>
            <div className='bg-green-600 p-3 rounded-lg text-2xl font-bold'>MovieMagic</div>
            <div className='flex flex-1 items-center rounded-lg gap-2 border p-3'>
                <input value={keyword} onKeyDown={searchFunc} onChange={(e)=>setKeyword(e.target.value)} placeholder='enter' className='outline-none flex-1 bg-transparent'  type='text'/>
                <IoSearch size={24}/>
            </div>
            <ThemeComp/>
            {
                menu.map((mn,i)=> (
                    <MenuItem mn={mn} key={i}/>
                ))
            }
        </div>
    );
}

export default Header;
