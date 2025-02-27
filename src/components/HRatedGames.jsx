import React from 'react'
import Slider from "react-slick";
import { starsGen } from '../services/stars';
import { useState, useEffect } from 'react';
import { apiDevlopers } from '../services/api';

function HRatedGames({ games, setHDevelopers }) {
    const [dev, setDev] = useState([])
    useEffect(() => {
        const callapiDevelopers = async () => {
            try {
                const devPromises = games.results.map(game => apiDevlopers(game.id));
                const devResponses = await Promise.all(devPromises)
                setDev(devResponses);

            } catch (error) {
                console.error("Error Fetchnig Curosel Devs", error)
            } finally {
                setHDevelopers(false);
            }
        }
        callapiDevelopers();
    }, [])
    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Loop through items
        speed: 1000, // Animation speed
        slidesToShow: 3, // Number of slides visible at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Auto slide
        autoplaySpeed: 1500, // Duration between auto slides
        responsive: [
            {
                breakpoint: 768, // For small screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="carousel-container ">
            <Slider {...settings}>
                {games.results.map((game, index) => (
                    <div key={index} className="carousel-item">
                        <div className="bg-background/80 backdrop-blur-md border md:border-l  border-white/10 md:col-span-4 md:row-span-4 md:row-start-2  p-4 transition-all duration-300 hover:bg-background/90 hover:scale-[1.02]">
                            <div>
                                <img className='w-full h-80 object-cover flex justify-center items-center' src={game?.background_image || '/src/public/noimage.webp'} alt='game-photo' />
                            </div>
                            <div>
                                <div className='flex flex-cols justify-center items-center gap-3 pt-3 text-white'>
                                    <h1 className='text-xl w-full line-clamp-2 overflow-hidden'>{game?.name || ""}</h1>

                                    <img className='h-10 w-10' src={game?.esrb_rating?.slug ? `/src/public/${game.esrb_rating.slug}.svg` : '/src/public/rating-pending.svg'} />
                                </div>
                            </div>
                            <div className='flex flex-cols gap-4 mt-2 pb-4 border-b border-white/30 text-white'>
                                <h2>{game?.rating || ""}</h2>
                                <span>{starsGen(game.rating)}</span>
                                <p className='ml-5 text-xs bg-red-700 p-2 rounded-xl'>Released: {game?.released || ""}</p>
                            </div>

                            <div className='mt-4'>
                                <h1 className="text-xs text-white">
                                    Creation Of:
                                    {dev[index]?.publishers[0]?.name && (
                                        <span className="text-rose-500 m-1 border-l border-r border-white/10 p-1">
                                            {dev[index].publishers[0].name}
                                        </span>
                                    )}
                                    {dev[index]?.publishers[1]?.name && (
                                        <span className="text-rose-400 m-1 border-l border-r border-white/10 p-1">
                                            {dev[index].publishers[1].name}
                                        </span>
                                    )}

                                </h1>

                            </div>

                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );

}

export default HRatedGames