

const Projects = () => {

    return(
    <div className="px-24 my-24 max-lg:px-4" id="projectsd">
        <div className="bg-black w-1 h-20" id="projects"></div>
        <div className="flex items-center gap-3 pb-10">
        <h1 className="text-white text-2xl font font-black">Projects</h1>
        <div className="w-65 h-1 bg-white sh"></div>
        </div>
        <div className="flex flex-col gap-20">
        <section className="flex gap-20 py-12 pl-24 border-y-2 border-black transition ease-in-out duration-700  md:hover:border-white max-lg:p-1 max-lg:grid max-lg:grid-cols-1 max-lg:grid-rows-2 max-lg:justify-items-center">
        <div className="max-lg:w-10/12 max-lg:pb-5 max-lg:border-b-2 max-lg:border-white">
        <img src="./homepage.png" alt="" className="w-612 rounded-xl max-lg:w-full max-lg:h-48 "/>
        </div>
        <div className="flex flex-col gap-8 w-1/3 justify-center max-lg:row-start-1 max-lg:w-4/5">
        <h1 className="text-3xl font-black text-white text-center font3">Messaging App</h1>
        <p className="flex text-center chakra text-lg text-gray-300">Full stack app inspired by WhatsApp. Built with React js, Express, Node.js and MongoDB. The app allows users to register, log in, and interact through messages.</p>
        <div className="flex justify-evenly">
            
            <a href="https://messaging-c14r9vqg2-brdorads-projects.vercel.app/" className="flex justify-center items-center text-white border-2 border-white transition-all ease-out duration-500 btn w-48 h-14 max-lg:w-40 rounded-md font3 max-[460px]:w-28">
                Live preview
            </a>
            
           
            <a href="https://github.com/brdorad3/MessagingApp" className="flex justify-center items-center text-white border-2 border-white transition-all ease-out duration-500 btn w-48 max-lg:w-40 h-14  rounded-md font2 max-[460px]:w-28">
                View code
            </a>
        
        </div>
        </div>
        </section>
        <section className="flex gap-20 py-12 border-y-2 border-black transition ease-in-out duration-700 md:hover:border-white justify-end pr-24 max-lg:p-1 max-lg:grid max-lg:grid-cols-1 max-lg:grid-rows-2 max-lg:justify-items-center">
        <div className="flex flex-col gap-8 justify-center w-1/3 max-lg:w-4/5">
        <h1 className="text-3xl font-black text-white text-center font3">Blog - CRUD Application</h1>
        <p className="text-center text-gray-300 text-lg chakra">MERN application allowing users to write and comment published posts. User authentication is handled via a simple username and password strategy using passportjs.</p>
        <div className="flex justify-evenly">
            <a href="https://blog-7tydo1uhw-brdorads-projects.vercel.app/" className="flex justify-center items-center text-white border-2 border-white transition-all ease-out duration-500 btn w-48 h-14 max-lg:w-40 rounded-md font3 max-[460px]:w-28 ">
                Live preview
            </a>
            <a href="https://github.com/brdorad3/Blog" className="flex justify-center items-center text-white border-2 border-white  w-48 h-14 max-lg:w-40 transition-all ease-out duration-500 btn rounded-md font2 max-[460px]:w-28">
                View code
            </a>
        </div>
        </div>
        <div className="max-lg:w-10/12  max-lg:border-b-2 max-lg:border-white max-lg:h-56">
        <img src="./bloghome.png" alt="" className="w-612 h-357 rounded-xl max-lg:w-full max-lg:h-48"/>
        </div>
        </section>
        <section className="flex gap-20 py-12 border-y-2 border-black transition ease-in-out duration-700 md:hover:border-white pl-24 max-lg:p-1 max-lg:grid max-lg:grid-cols-1 max-lg:grid-rows-2 max-lg:justify-items-center">
        <div className="max-lg:w-10/12 max-lg:pb-5 max-lg:border-b-2 max-lg:border-white max-lg:h-56">
        <img src="./waldohome.png" alt="" className="w-612 h-357 rounded-xl max-lg:h-48 max-lg:w-full "/>
        </div>
        <div className="flex flex-col gap-8 w-1/3 justify-center max-lg:row-start-1 max-lg:w-4/5">
        <h1 className="text-3xl font-black text-white text-center font3">Where's Waldo?</h1>
        <p className="text-center text-gray-300 text-lg chakra"> Interactive web application with a goal of finding hidden characters within a complex, detailed image. Built with React js, Express, Node.js and MongoDB.</p>
        <div className="flex justify-evenly">
            <a href="https://where-is-waldo-gfa1l20u8-brdorads-projects.vercel.app" className="flex justify-center items-center text-white border-2 border-white transition-all ease-out duration-500 btn w-48 h-14 max-lg:w-40 font3 rounded-md max-[460px]:w-28">
                Live preview
            </a>
            <a href="https://github.com/brdorad3/WhereIsWaldo" className="flex justify-center items-center text-white border-2 border-white transition-all ease-out duration-500 btn w-48 h-14 max-lg:w-40 font2 rounded-md max-[460px]:w-28">
                View code
            </a>
        </div>
        </div>
        </section>
        </div>
    </div>)
}

export default Projects