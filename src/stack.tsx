

const Stack = () => {

    return(
        <div className="flex flex-col h-full  px-24 gap-10 max-lg:px-4" id="stackd">
            <div className="bg-black w-1 h-7" id="stack"></div>
            <div className="flex items-center gap-5">
            
            <h1 className="text-white text-2xl font-black font">Stack</h1>
            <div className="w-2/3 h-1 bg-white sh"></div>
            </div>
            
            <div className="flex w-full justify-between h-full max-lg:flex-col max-lg:gap-10">
                
                <div className="flex flex-col items-center w-1/3 gap-3 max-lg:w-full">
                    <h4 className="font text-2xl">Frontend</h4>
        <section className="w-2/3 h-96  bg-black border-4 border-cream rounded-md grid grid-rows-3 grid-cols-3 items-center justify-center">
        <div className="flex flex-col items-center">
            <img src="./html5-02-svgrepo-com (2).svg" alt="" className="w-35"  />
            <h4 className="font2">HTML</h4>
        </div>
        <div className="flex flex-col items-center">
            <img src="./css3-02-svgrepo-com.svg" alt="" className="w-1/3" />
            <h4 className="font2">CSS</h4>
        </div>
        <div className="flex flex-col items-center">
            <img src="./tailwind-svgrepo-com.svg" alt="" className="w-1/3" />
            <h4 className="font2">TailwindCSS</h4>
        </div>
        <div className="flex  items-center col-span-full ">
            <div className="flex flex-col items-center">
            <img src="./js01-svgrepo-com.svg" alt="" className="w-1/5" />
            <h4 className="font2">JavaScript</h4>
            </div>
            <div className="flex flex-col items-center">
            <img src="./typescript-official-svgrepo-com.svg" alt="" className="w-22" />
            <h4 className="font2">TypeScript</h4>
        </div>
        </div>
        
        <div className="row-start-3 col-start-2 flex items-center flex-col">
            <img src="./react-svgrepo-com.svg" alt="" className="w-1/3" />
            <h4 className="font2">React</h4>
        </div>
        </section >
        </div>

        <div className="flex flex-col items-center w-1/3 gap-3 max-lg:w-full">
            <h4 className="font text-2xl">Backend</h4>
        <section className="w-2/3 h-96 bg-black border-4 border-cream rounded-md grid grid-rows-3 grid-cols-3 items-center justify-center">
        <div className="flex flex-col items-center">
            <img src="./node-fill-svgrepo-com.svg" alt="" className="w-1/3"  />
            <h4 className="font2">NodeJs</h4>
        </div>
        <div className="flex flex-col items-center">
            <img src="./express-svgrepo-com.svg" alt="" className="w-1/3" />
            <h4 className="font2">Express</h4>
        </div>
        <div className="flex flex-col items-center">
            <img src="./mongodb-svgrepo-com.svg" alt="" className="w-1/3" />
            <h4 className="font2">MongoDB</h4>
        </div>
        <div className="flex  items-center col-span-full ">
            <div className="flex flex-col items-center">
            <img src="./js01-svgrepo-com.svg" alt="" className="w-1/5" />
            <h4 className="font2">JavaScript</h4>
            </div>
            <div className="flex flex-col items-center">
            <img src="./typescript-official-svgrepo-com.svg" alt="" className="w-22" />
            <h4 className="font2">TypeScript</h4>
        </div>
        </div>
        
        <div className="flex flex-col items-center">
            <img src="./ejs-svgrepo-com.svg" alt="" className="w-2/5" />
            <h4 className="font2">EJS</h4>
        </div>
        <div className="flex flex-col items-center">
            <img src="./icon_pug.svg" alt="" className="w-2/5" />
            <h4 className="font2">Pug</h4>
        </div>
        <div className="flex flex-col items-center ">
            <img src="./sql-svgrepo-com.svg" alt="" className="w-2/5" />
            <h4 className="font2">Sql</h4>
        </div>
        </section >
        </div>
        <div className="flex flex-col items-center w-1/3 gap-3 max-lg:w-full">
            <h4 className="font text-2xl">Other</h4>
        <section className="w-2/3 h-96 bg-black border-4 border-cream rounded-md grid grid-rows-2 grid-cols-2 items-center justify-center">
        <div className="flex flex-col items-center">
            <img src="./git-svgrepo-com (1).svg" alt="" className="w-1/4"  />
            <h4 className="font2">Git</h4>
        </div>
        <div className="flex flex-col items-center">
            <img src="./github-142-svgrepo-com (1).svg" alt="" className="w-1/4" />
            <h4 className="font2">GitHub</h4>
        </div>
        <div className="flex flex-col items-center">
            <img src="./npm-svgrepo-com.svg" alt="" className="w-1/4"  />
            <h4 className="font2">NPM</h4>
        </div>
        <div className="flex flex-col items-center">
            <img src="./webpack-svgrepo-com.svg" alt="" className="w-1/4" />
            <h4 className="font2">Webpack</h4>
        </div>

        </section >
        </div>
        </div>
        </div>
        
    )
}
export default Stack