import React from 'react'
import Slider from "react-slick";


function ScreenShots({ screenshot }) {

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


    if (!screenshot.results) return ""
    return (

        <div className="carousel-container ">
            <Slider {...settings}>
                {screenshot.results.map((game, index) => (
                    <div key={index} className="carousel-item">
                        <div className="bg-background/80 backdrop-blur-md border md:border-l  border-white/10 md:col-span-4 md:row-span-4 md:row-start-2  p-4 transition-all duration-300 hover:bg-background/90 hover:scale-[1.02]">
                            <div>
                                <img className='w-full h-80 object-cover flex justify-center items-center' src={game?.image || './public/noimage.webp'} alt='game-photo' />
                            </div>





                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );

}

export default ScreenShots