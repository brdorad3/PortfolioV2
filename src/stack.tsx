

const Stack = () => {

    return(
        <div className="flex flex-col h-96 pt-20 px-24">
            <h1 className="text-cream text-2xl font-black">Stack</h1>
            <div className="flex w-full justify-between h-full">
        <section className="w-1/4 h-80  bg-black border-4 border-cream rounded-md grid grid-rows-3 grid-cols-3 items-center justify-center">
        <div className="flex flex-col items-center">
            <img src="public/html5-02-svgrepo-com (2).svg" alt="" className="w-1/3"  />
            <h4>HTML</h4>
        </div>
        <div className="flex flex-col items-center">
            <img src="public/css3-02-svgrepo-com.svg" alt="" className="w-1/3" />
            <h4>CSS</h4>
        </div>
        <div className="flex flex-col items-center">
            <img src="public/tailwind-svgrepo-com.svg" alt="" className="w-1/3" />
            <h4>TailwindCSS</h4>
        </div>
        <div className="flex  items-center col-span-full ">
            <div className="flex flex-col items-center">
            <img src="public/js01-svgrepo-com.svg" alt="" className="w-1/5" />
            <h4>JavaScript</h4>
            </div>
            <div className="flex flex-col items-center">
            <img src="public/typescript-official-svgrepo-com.svg" alt="" className="w-1/5" />
            <h4>TypeScript</h4>
        </div>
        </div>
        
        <div className="row-start-3 col-start-2 flex items-center flex-col">
            <img src="public/react-svgrepo-com.svg" alt="" className="w-1/3" />
            <h4>React</h4>
        </div>
        
        
        </section >
        <section className="w-1/4 h-full bg-black border-4 border-cream rounded-md"></section >
        <section className="w-1/4 h-full bg-black border-4 border-cream rounded-md"></section >
        </div>
        </div>
    )
}
export default Stack