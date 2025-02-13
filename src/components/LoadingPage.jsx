import styles from "./LoadingPage.module.css"

export default function LoadingPage() {
    return (
        <div className="min-h-screen bg-black/95 flex flex-col items-center justify-center p-4">

            <div className="text-center space-y-6 mb-12">
                <div className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="text-white">Just A </span>
                    <span className="text-rose-600">Game</span>
                </div>
                <div className="text-white/80 text-lg">Loading your adventure...</div>
            </div>


            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className={`w-full h-full bg-rose-600 rounded-full ${styles.loadingBar}`}></div>
            </div>


            <div
                className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20 blur-md"
                style={{
                    backgroundImage: `url(${encodeURI("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-36H83eqQLiEIUAncMsWd0FkdxKLd52.png")})`,
                }}
            ></div>
        </div>
    )
}
