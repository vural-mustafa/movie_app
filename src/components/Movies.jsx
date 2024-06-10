'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Movies = ({dt}) => {
    const router =useRouter();  //bu sekilde kullanabilmek icin mutlaka import ederken next/roueter yazarsa next/navigation yailmali

    console.log(dt,'dt');

    //dt? yabma sebebimiz dt icinde var mi diye sorgu yabiyoruz.Birinde kullanb digerinde kullanmamazlik yabma kodda hata alabilirsin.
    //ilk basta bu sayfada film listesini getirdik sonrasında detay sayfasina yonlendirmesi icin onclick islemi yabtik
    return (
        <div onClick={()=>router.push(`/movie/${dt?.id}`)} className='min-w-[450px]  relative imgContainer cursor-pointer'>
            <Image alt='sfse' style={{objectFit:'cover'}} width={450} height={300} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}/> 
            <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'> 
                <div className='text-2xl font-bold'>{dt?.title}</div>
                <div>{dt?.release_date}-{dt?.vote_average}</div>
            </div>
        </div>
    );
}

export default Movies;
