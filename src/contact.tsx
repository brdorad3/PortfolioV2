
const Contact = () => {


    return(
        <div className="w-full flex flex-col items-center pb-24 " id="contact">
            <div className="flex w-full justify-center items-center gap-3 pb-24">
                <div className="w-1/4 h-1 bg-white sh"></div>
        <h1 className="text-2xl font-black font text-white">Contact</h1>
        <div className="w-1/4 h-1 bg-white sh"></div>
        </div>
        <div className="w-full">
            <form action="#" className="flex flex-col gap-10 w-full items-center">
                <input type="text" 
                 placeholder="Name"
                 maxLength={15} 
                 className=" w-1/2 max-md:w-2/3 bg-black text-white placeholder-white border-2 border-white rounded-sm px-4 py-4"
                 required
                 />
                 
                <input type="text"
                 placeholder="Email"
                 maxLength={40}
                 className="w-1/2 max-md:w-2/3  bg-black text-white placeholder-white border-2 border-white rounded-sm px-4 py-4 "
                 required
                 />
                <textarea  placeholder="Message" rows={5} cols={4}
                className="w-1/2 max-md:w-2/3 bg-black text-white placeholder-white border-2 border-white rounded-sm px-4 py-2"
                maxLength={250}
                required
                ></textarea>
                <div className="relative">
                <button type="submit" className="self-center text-white test rounded-lg border-2 border-white w-36 h-12 chakra">Send</button>
                
                </div>
            </form>
        </div>
        </div>
    )
}
export default Contact