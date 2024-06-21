import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    return(<div className="flex w-full bg-black justify-between px-24 py-5 border-b-2 border-cream fixed max-sm:px-5 z-10 ">   
        <div className="flex flex-col">
        <h1 className="text-white text-base chakra ">Brdorad3</h1>
        <div className=" w-1/2 h-[1px] bg-white"></div>
        </div>
        <section className="flex gap-5">
            
        
        <HashLink smooth to='#stack' > <h2 className="text-white text-base chakra">Stack</h2> </HashLink>
        <h3 className='text-white cursor-pointer '>|</h3>
        <HashLink smooth to='#projects' > <h2 className="text-white  text-base chakra">Projects</h2> </HashLink>
        <h3 className='text-white  cursor-pointer'>|</h3>
        <HashLink smooth to='#contact' > <h2 className="text-white text-base chakra">Contact</h2> </HashLink>
        
        </section>


    </div>)
}
export default Navbar