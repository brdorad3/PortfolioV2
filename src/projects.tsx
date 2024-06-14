

const Projects = () => {

    return(
    <div className="px-24 ">
        <section className="flex gap-20 py-24 border-b-2 border-gray-700  hover:border-cream hover:border-b-2">
        <img src="./homepage.png" alt="" className="w-1/2 rounded-xl"/>
        <div className="flex flex-col gap-8 ">
        <h1 className="text-3xl font-black text-white">Messaging App</h1>
        <p>Full stack app inspired by WhatsApp. Built with React js, Express, Node.js and MongoDB. This app offers features such as adding contacts, communication and editing your profile.</p>
        </div>
        </section>
        <section className="flex gap-20 py-24 border-b-2 border-gray-700  hover:border-cream hover:border-b-2">
        <div className="flex flex-col gap-8 ">
        <h1 className="text-3xl font-black text-white">Blog - CRUD Application</h1>
        <p>MERN application allowing users to write and comment published posts.</p>
        </div>
        <img src="./bloghome.png" alt="" className="w-1/2 rounded-xl"/>
        </section>
        <section className="flex gap-20 py-24 border-b-2 border-gray-700  hover:border-cream hover:border-b-2">
        <img src="./waldohome.png" alt="" className="w-1/2 rounded-xl"/>
        <div className="flex flex-col gap-8 ">
        <h1 className="text-3xl font-black text-white">Where's Waldo?</h1>
        <p>Full stack app inspired by WhatsApp. Built with React js, Express, Node.js and MongoDB. This app offers features such as adding contacts, communication and editing your profile.</p>
        </div>
        </section>
    </div>)
}

export default Projects