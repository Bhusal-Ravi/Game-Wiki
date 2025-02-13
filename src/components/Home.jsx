import React from 'react'
import { useState, useEffect } from 'react'
import { apiDevlopers, apiGame, apiQuotes, apiRatedGames } from '../services/api'
import LoadingPage from './LoadingPage'
import { starsGen } from '../services/stars'
import HRatedGames from './HRatedGames'
import Quotes from './Quotes'




function Home() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [incoming, setIncoming] = useState(true);
    const [developers, setDevelopers] = useState([]);
    const [hrated, setHRated] = useState([]);
    const [hDevelopers, setHDevelopers] = useState(true);
    const [quotes, setQuotes] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIncoming(true)
                const values = await apiGame();
                const ratedGames = await apiRatedGames();
                const apiquote = await apiQuotes();
                setData(values);
                setHRated(ratedGames);
                setQuotes(apiquote);
                console.log(values);

                const developerPromises = values.map(value => apiDevlopers(value.id));
                const developerResponses = await Promise.all(developerPromises);

                setDevelopers(developerResponses);

            }
            catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIncoming(false)
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log(developers)
    }, [developers])



    if (incoming) return <LoadingPage />

    return (
        <div className="relative z-0 mb-5">
            <div className='w-full relative'>
                <div className='w-full aspect-video bg-rose-500 shadow-2xl shadow-rose-500/50'>
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src='../public/websitevideo.mp4' type='video/mp4' />
                        Video Could Not Load
                    </video>
                </div>

                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-10'>
                    <h1 className='font-[Orbitron] text-2xl sm:text-4xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-0 scale-105 transition-all duration-600 hover:scale-100'>
                        Just A<span className='text-rose-800 ml-2'>Game</span>
                    </h1>
                </div>
            </div>

            <div>
                <h1 className='font-[Orbitron] mt-30 lg:mt-50 pt-10 border-t border-white/10  text-2xl sm:text-4xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-0 scale-105 transition-all duration-600 hover:scale-100'>
                    Explore Random<span className='text-rose-800 ml-2'>Games</span>
                </h1>
            </div>

            <div className="mt-20 lg:mt-30 grid grid-cols-1 gap-4  md:grid-cols-13 md:grid-rows-span-6  p-5 text-white ">
                <div className="bg-background/80 backdrop-blur-md border md:border-l md:border-b border-white/10 md:col-span-4 md:row-span-4 md:row-start-2  p-4 transition-all duration-300 hover:bg-background/90 hover:scale-[1.02]">
                    <div>
                        <img className='w-full h-80 object-cover flex justify-center items-center' src={data[0]?.background_image || './public/noimage.webp'} alt='game-photo' />
                    </div>
                    <div>
                        <div className='flex flex-cols justify-center items-center gap-3 pt-3'>
                            <h1 className='text-xl'>{data[0]?.name || ""}</h1>
                            <img className='h-10 w-10' src={data[0]?.esrb_rating?.slug ? `./public/${data[0].esrb_rating.slug}.svg` : './public/rating-pending.svg'} />
                        </div>
                    </div>
                    <div className='flex flex-cols gap-4 mt-2 pb-4 border-b border-white/30'>
                        <h2>{data[0]?.rating || ""}</h2>
                        <span>{starsGen(data[0].rating)}</span>
                    </div>

                    <div className='mt-4'>
                        <h1 className="text-xs">
                            Creation Of:
                            {developers[0]?.publishers[0]?.name && (
                                <span className="text-rose-500 m-1 border-l border-r border-white/10 p-1">
                                    {developers[0].publishers[0].name}
                                </span>
                            )}
                            {developers[0]?.publishers[1]?.name && (
                                <span className="text-rose-400 m-1 border-l border-r border-white/10 p-1">
                                    {developers[0].publishers[1].name}
                                </span>
                            )}

                        </h1>

                    </div>


                </div>
                <div className="bg-background/80 backdrop-blur-md border md:border-b md:border-r md:border-l border-white/10 md:col-span-5 md:col-start-5 md:row-span-6 p-4 transition-all duration-300 hover:bg-background/90 hover:scale-[1.02]"
                >
                    <div>
                        <img className='w-full h-100 object-cover flex justify-center items-center' src={data[1].background_image} alt='game-photo' />
                    </div>
                    <div>
                        <div className='flex flex-cols justify-center items-center gap-3 pt-3'>
                            <h1 className='text-xl'>{data[1].name}</h1>
                            <img className='h-10 w-10' src={data[1]?.esrb_rating?.slug ? `./public/${data[1].esrb_rating.slug}.svg` : './public/rating-pending.svg'} />
                        </div>
                    </div>
                    <div className='flex flex-cols gap-4 mt-2 pb-4 border-b border-white/30'>
                        <h2>{data[1].rating}</h2>
                        <span>{starsGen(data[1].rating)}</span>
                    </div>

                    <div className='mt-4'>
                        <h1 className="text-xs">
                            Creation Of:
                            {developers[1]?.publishers[0]?.name && (
                                <span className="text-rose-500 m-1 border-l border-r border-white/10 p-1">
                                    {developers[1].publishers[0].name}
                                </span>
                            )}
                            {developers[1]?.publishers[1]?.name && (
                                <span className="text-rose-400 m-1 border-l border-r border-white/10 p-1">
                                    {developers[1].publishers[1].name}
                                </span>
                            )}

                        </h1>

                    </div>
                </div>




                <div className="bg-background/80 backdrop-blur-md border md:border-l md:border-b border-white/10 md:col-span-4 md:row-span-4 md:row-start-2 md:col-start-10 p-4 transition-all duration-300 hover:bg-background/90 hover:scale-[1.02]"
                >
                    <div>
                        <img className='w-full h-80 object-cover flex justify-center items-center' src={data[2].background_image} alt='game-photo' />
                    </div>
                    <div>
                        <div className='flex flex-cols justify-center items-center gap-3 pt-3'>
                            <h1 className='text-xl'>{data[2].name}</h1>
                            <img className='h-10 w-10' src={data[2]?.esrb_rating?.slug ? `./public/${data[2].esrb_rating.slug}.svg` : './public/rating-pending.svg'} />
                        </div>
                    </div>
                    <div className='flex flex-cols gap-4 mt-2 pb-4 border-b border-white/30'>
                        <h2>{data[2].rating}</h2>
                        <span>{starsGen(data[2].rating)}</span>
                    </div>

                    <div className='mt-4'>
                        <h1 className="text-xs">
                            Creation Of:
                            {developers[2]?.publishers[0]?.name && (
                                <span className="text-rose-500 m-1 border-l border-r border-white/10 p-1">
                                    {developers[2].publishers[0].name}
                                </span>
                            )}
                            {developers[2]?.publishers[1]?.name && (
                                <span className="text-rose-400 m-1 border-l border-r border-white/10 p-1">
                                    {developers[2].publishers[1].name}
                                </span>
                            )}

                        </h1>

                    </div>
                </div>
            </div>
            <div className='mt-10 lg:mt-30 p-5'> <h1 className='font-[Orbitron] mt-20 pt-10 border-t border-white/10  text-2xl sm:text-4xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-0 scale-105 transition-all duration-600 hover:scale-100'>
                The Game Hall of Fame <span className='text-rose-800 ml-2'>(2010–Present)</span>
            </h1>
            </div>
            <HRatedGames games={hrated} setHDevelopers={setHDevelopers} />
            <Quotes quotes={quotes} />


        </div>


    )
}

export default Home