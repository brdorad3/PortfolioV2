

const Projects = () => {

    return(
    <div className="px-24 mt-24 max-md:px-2">
        <div className="flex items-center gap-3 pb-10">
        <h1 className="text-white text-2xl font font-black">Projects</h1>
        <div className="w-65 h-1 bg-white sh"></div>
        </div>
        <div className="flex flex-col gap-20">
        <section className="flex gap-20 py-12 pl-24 border-y-2 border-black transition ease-in-out duration-700  md:hover:border-white max-md:p-1 max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 max-md:justify-items-center">
        <div className="max-md:w-10/12 max-md:pb-5 max-md:border-b-2 max-md:border-white">
        <img src="./homepage.png" alt="" className="w-612 rounded-xl max-md:w-full max-md:h-48 "/>
        </div>
        <div className="flex flex-col gap-8 w-1/3 justify-center max-md:row-start-1 max-md:w-4/5">
        <h1 className="text-3xl font-black text-cream text-center font">Messaging App</h1>
        <p className="flex text-center chakra text-lg text-white">Full stack app inspired by WhatsApp. Built with React js, Express, Node.js and MongoDB. The app allows users to register, log in, and interact through messages.</p>
        <div className="flex justify-evenly">
            <button className="text-white border-2 border-white py-3 px-5 rounded-md font-black font3">
                Live preview
            </button>
            <button className="text-black bg-white py-3 px-5 font-black rounded-md font3">
                View code
            </button>
        </div>
        </div>
        </section>
        <section className="flex gap-20 py-12 border-y-2 border-black transition ease-in-out duration-700 md:hover:border-white justify-end pr-24 max-md:p-1 max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 max-md:justify-items-center">
        <div className="flex flex-col gap-8 justify-center w-1/3 max-md:w-4/5">
        <h1 className="text-3xl font-black text-cream text-center font">Blog - CRUD Application</h1>
        <p className="text-center text-white text-lg chakra">MERN application allowing users to write and comment published posts. User authentication is handled via a simple username and password strategy using passportjs.</p>
        <div className="flex justify-evenly">
            <button className="text-white border-2 border-white py-3 px-5 rounded-md font3 ">
                Live preview
            </button>
            <button className="text-black bg-white py-3 px-5 w-48 font-black hover:tracking-widest hover:text-xl rounded-md font3">
                View code
            </button>
        </div>
        </div>
        <div className="max-md:w-10/12  max-md:border-b-2 max-md:border-white max-md:h-56">
        <img src="./bloghome.png" alt="" className="w-612 h-357 rounded-xl max-md:w-full max-md:h-48"/>
        </div>
        </section>
        <section className="flex gap-20 py-12 border-y-2 border-black transition ease-in-out duration-700 md:hover:border-white pl-24 max-md:p-1 max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 max-md:justify-items-center">
        <div className="max-md:w-10/12 max-md:pb-5 max-md:border-b-2 max-md:border-white max-md:h-56">
        <img src="./waldohome.png" alt="" className="w-612 h-357 rounded-xl max-md:h-48 max-md:w-full "/>
        </div>
        <div className="flex flex-col gap-8 w-1/3 justify-center max-md:row-start-1 max-md:w-4/5">
        <h1 className="text-3xl font-black text-cream text-center font">Where's Waldo?</h1>
        <p className="text-center text-white text-lg chakra"> Interactive web application with a goal of finding hidden characters. Built with React js, Express, Node.js and MongoDB. This app offers features such as adding contacts, communication and editing your profile.</p>
        <div className="flex justify-evenly">
            <button className="text-white border-2 border-white py-3 px-5 rounded-md">
                Live preview
            </button>
            <button className="text-black bg-white py-3 px-5 font-black rounded-md">
                View code
            </button>
        </div>
        </div>
        </section>
        </div>
    </div>)
}

export default Projects