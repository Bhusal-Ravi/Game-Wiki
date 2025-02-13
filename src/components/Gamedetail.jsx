import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { apiDevlopers, apiScreenshot } from '../services/api'
import LoadingPage from './LoadingPage'
import { starsGen } from '../services/stars'
import ScreenShots from './ScreenShots'

function Gamedetail() {

    const { id } = useParams()
    const [game, setGame] = useState([])
    const [screenshot, setScreenshot] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        async function gameExtract() {
            try {
                const data = await apiDevlopers(id)
                const sc = await apiScreenshot(id)
                setScreenshot(sc)
                setGame(data)
                console.log(data)
                console.log(sc)
            } catch (error) {

            } finally {
                setLoading(false)
            }
        }

        gameExtract()
    }, [])

    if (loading) return <LoadingPage />


    return (
        <div className='mb-5'>
            <div className="w-full h-[550px] overflow-hidden relative  ">
                <img
                    src={game.background_image}
                    alt="gameimage"
                    className="w-full h-full object-cover object-center"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-25 p-4 flex justify-center items-center gap-2">
                    <h1 className="text-white text-2xl font-bold">{game.name}</h1>
                    <img className='w-10 h-10' src={game?.esrb_rating?.slug ? `../public/${game.esrb_rating.slug}.svg` : '../public/rating-pending.svg'}></img>
                </div>
            </div>
            {/*Ratings */}
            <div className="text-white mx-auto w-[400px] md:w-[600px] lg:w-[1000px] mt-5 flex flex-wrap justify-center items-center gap-10 border border-white/10 p-10 bg-black/50">

                {/* Rating Section */}
                <div className="flex flex-col justify-center items-center gap-1 p-4 border border-white/10 w-32 h-28 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-opacity-80">
                    <h1 className="text-sm">{game.rating}</h1>
                    {starsGen(game.rating)}
                </div>

                {/* Release Date Section */}
                <div className="flex flex-col justify-center items-center gap-1 p-4 border border-white/10 w-32 h-28 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-opacity-80">
                    <h1 className="text-sm">Release Date</h1>
                    <h1 className="text-sm text-rose-400">{game.released}</h1>
                </div>

                {/* Metacritic Score Section */}
                <div className="gap-2 flex flex-row justify-center items-center border border-white/10 p-4 w-32 h-28 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-opacity-80">
                    <img src="../public/metacritic.png" className="w-8 h-8" />
                    <div
                        className={`flex justify-center items-center ${game?.metacritic < 50 ? "bg-red-400 text-white" : "bg-green-400 text-black"}
      w-full h-10 p-2 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-opacity-80`}
                    >
                        <h1 className="text-md">{game?.metacritic || "NULL"}</h1>
                    </div>
                </div>

            </div>

            {<ScreenShots screenshot={screenshot} />}


            {/* Platforms */}

            <div className="text-white mx-auto w-[400px] md:w-[600px] lg:w-[1000px] mt-5 flex flex-wrap justify-center items-center border border-white/10 p-10 bg-black/50 gap-20">

                {game.parent_platforms &&
                    game.parent_platforms.map((platform) => (
                        <div
                            key={platform.platform.id}
                            className={`flex flex-col justify-center items-center gap-1 p-1 border border-white/10 w-[100px] h-[100px] transition duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-opacity-80 
                                ${platform.platform.slug === "pc"
                                    ? "bg-slate-400"
                                    : platform.platform.slug === "playstation"
                                        ? "bg-blue-400"
                                        : platform.platform.slug === "xbox"
                                            ? "bg-green-400"
                                            : platform.platform.slug === "nintendo"
                                                ? "bg-red-400"
                                                : platform.platform.slug === "linux"
                                                    ? "bg-indigo-600"
                                                    : platform.platform.slug === "android"
                                                        ? "bg-green-200"
                                                        : platform.platform.slug === "mac"
                                                            ? "bg-indigo-600"

                                                            : "bg-red-500"
                                }`}
                        >
                            <h1 className="text-sm text-center">{platform.platform.name}</h1>
                            <img
                                src={`../public/${platform.platform.slug}.png`}
                                className="w-12 h-12 object-contain"
                                alt={platform.platform.name}
                            />
                        </div>
                    ))}
            </div>




            <div className="text-white mx-auto w-[400px] md:w-[600px] lg:w-[1000px] mt-10 flex-col justify-center items-center border border-white/10 p-5 bg-black/50 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-opacity-80 ">
                <p
                    dangerouslySetInnerHTML={{ __html: game.description }}
                    className="mt-3 text-sm whitespace-pre-line leading-relaxed text-gray-300"
                ></p>



            </div>


        </div>


    )
}

export default Gamedetail