import Movies from '@/components/Movies';
import React from 'react';

const Page = async({params}) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9e4b7a2a5da7b7dbdc0f7119c33452a1&query=${keyword}&language=en-US&include_adult=false`); 
    const data = await res.json();
    console.log(data?.results,'data');
    return (
        <div>
            {
                !data?.results ? 
                <div>Sorry, there is no section that matches your search</div>:
                <div className='flex items-center flex-wrap gap-3'>
                    {
                          data?.results?.map((dt,i)=>(
                            <Movies dt={dt} key={i}/>
                        ))
                    }
                </div>
                  
                   
            }
        </div>
    );
}

export default Page;
