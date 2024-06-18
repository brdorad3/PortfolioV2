

const Home = () => {

    return(
        <div className="w-full h-screen flex flex-col items-center justify-center overflow-x-hidden relative">
            <h1 className="text-white text-5xl font flex gap-2 max-sm:text-4xl ">Hello, I'm <p className="text-cream "> Liam Willson</p>.</h1>
            <h2 className="text-white text-3xl font font-black max-sm:text-3xl">Full stack web developer.</h2>
            <div className="flex gap-5 mt-5">
                <button className="w-20 flex border-2 border-black pl-1 gap-1 py-five bg-white items-center rounded-lg outline outline-1 outline-white">
                    <img src="public/githubblack.svg" className="w-6" alt="" />
                    <p className="text-black font2">Github</p>
                </button>
                <button className="w-20 flex border-2 border-black px-cus py-five bg-white items-center rounded-lg outline outline-1 outline-white">
                    <img src="public/email-svgrepo-com.svg" className="w-6" alt="" />
                    <p className="text-black font2">Email</p>
                </button>
            </div>

            <p className=" ani">V</p>
            <p className=" ani2">V</p>
        </div>
    )
}
export default Home