

const Navbar = () => {
    return(<div className="flex w-full bg-black justify-between px-24 py-5 border-b-2 border-cream fixed max-sm:px-5 z-10 ">   
        <div className="flex flex-col">
        <h1 className="text-white text-md ">Brdorad3</h1>
        <div className=" w-1/2 h-1 bg-white"></div>
        </div>
        <section className="flex gap-5">
        <h2 className="text-white">Stack</h2>
        <h3>|</h3>
        <h2 className="text-white">Projects</h2>
        <h3>|</h3>
        <h2 className="text-white">Contact</h2>
        </section>


    </div>)
}
export default Navbar