'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Tabs = () => {
    const searchParams = useSearchParams();      //Sorguların tarayici uzerinde hangisine gidecekse ona gitmesini sagladik.
    const genre=searchParams.get('genre');
    console.log(genre,'genre');
    const tabs =[
        {
            name:'En Populer',
            url:'popular'                       //map donusumleri yapmak icin once baglantilari olusturduk
        },
        {
            name:'En Son',
            url:'latest'
        },
        {
            name:'Yakinda Gelecekler',
            url:'upcoming'
        }
    ]
    return (
        <div className='p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-8'>
            {
            tabs.map((tab,i)=>(  //Burada da map icin gerekli alanların sorgu linklerini direk olusturduk.
                <Link className={`cursor-pointer hover:opacity-80 transition-opacity ${tab.url === genre ? 'underline underline-offset-8 text-green-600': ''}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
            ))
            }
        </div>
     
    )
}

export default Tabs;
