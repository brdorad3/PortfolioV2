

const Projects = () => {

    return(
    <div className="px-24 mt-24 max-md:px-2">
        <div className="flex items-center gap-3 max-md:pb-10">
        <h1 className="text-white text-2xl font font-black">Projects</h1>
        <div className="w-65 h-1 bg-white sh"></div>
        </div>
        <section className="flex gap-20 py-24 pl-24  border-b-2 border-gray-700   hover:border-cream hover:border-b-2 max-md:p-1 max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 max-md:justify-items-center">
        <img src="./homepage.png" alt="" className="w-612 rounded-xl max-md:w-4/5 max-md:h-4/5 "/>
        <div className="flex flex-col gap-8 w-1/3 justify-center max-md:row-start-1 max-md:w-4/5">
        <h1 className="text-3xl font-black text-white text-center">Messaging App</h1>
        <p className="font2 flex text-center">Full stack app inspired by WhatsApp. Built with React js, Express, Node.js and MongoDB. The app allows users to register, log in, and interact through messages.</p>
        <div className="flex justify-evenly">
            <button className="text-white border-2 border-white p-2 rounded-md">
                Live
            </button>
            <button className="text-black bg-white p-2 font-black outline outline-2 outline-white rounded-md">
                Code
            </button>
        </div>
        </div>
        </section>
        <section className="flex gap-20 py-24 border-b-2 border-gray-700 justify-end pr-24  hover:border-cream hover:border-b-2 max-md:p-1 max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 max-md:justify-items-center">
        <div className="flex flex-col gap-8 justify-center w-1/3 max-md:w-4/5">
        <h1 className="text-3xl font-black text-white text-center">Blog - CRUD Application</h1>
        <p className="text-center">MERN application allowing users to write and comment published posts. User authentication is handled via a simple username and password strategy using passportjs.</p>
        <div className="flex justify-evenly">
            <button className="text-white border-2 border-white p-2 rounded-md">
                Live
            </button>
            <button className="text-black bg-white p-2 font-black outline outline-2 outline-white rounded-md">
                Code
            </button>
        </div>
        </div>
        
        <img src="./bloghome.png" alt="" className="w-612 h-357 rounded-xl max-md:w-2/3 max-md:h-4/5"/>
        </section>
        <section className="flex gap-20 py-24 border-b-2 border-gray-700 pl-24 hover:border-cream hover:border-b-2 max-md:p-1 max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 max-md:justify-items-center">
        <img src="./waldohome.png" alt="" className="w-612 h-357 rounded-xl"/>
        <div className="flex flex-col gap-8 w-1/3 justify-center max-md:row-start-1 max-md:w-4/5">
        <h1 className="text-3xl font-black text-white text-center">Where's Waldo?</h1>
        <p className="text-center"> Interactive web application with a goal of finding hidden characters. Built with React js, Express, Node.js and MongoDB. This app offers features such as adding contacts, communication and editing your profile.</p>
        </div>
        </section>
    </div>)
}

export default Projects