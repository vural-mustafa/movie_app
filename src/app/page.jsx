import Movies from '@/components/Movies';
import { data } from 'autoprefixer';
import React from 'react';

const Page = async ({searchParams}) => {

        //film listelerinin gelmesi icin fetchdata ile saglamis olduk. 
        const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : 'trending/all/day'}?api_key=9e4b7a2a5da7b7dbdc0f7119c33452a1&language=en-US&page=1`,{next:{revalidate:10000}});
        const data = await res.json();
        console.log(data,'data');
    return (
        <div className='flex items-center justify-center flex-wrap gap-3'>
               {
                data?.results?.map((dt,i)=>(
                    <Movies dt={dt} key={i}/>
                ))
               }
             
        </div>
    );
}

export default Page;
