
const Contact = () => {


    return(
        <div className="w-full flex flex-col items-center pb-24">
            <div className="flex w-full justify-center items-center gap-3">
                <div className="w-1/4 h-1 bg-white sh"></div>
        <h1 className="text-2xl font-black font text-white">Contact</h1>
        <div className="w-1/4 h-1 bg-white sh"></div>
        </div>
        <div>
            <form action="#" className="flex flex-col gap-5">
                <input type="text" 
                 placeholder="Name"
                 maxLength={15} 
                 className="bg-black text-white placeholder-white border-2 border-white rounded-sm px-4 py-2" />
                 required
                <input type="text"
                 placeholder="Email"
                 className="outline outline-offset-2 outline-1 outline-white "
                 required
                 />
                <textarea  placeholder="Message" rows={5} cols={4}
                required
                
                ></textarea>
                <button type="submit" className="text-white rounded-lg border-2 border-white">Send</button>
            </form>
        </div>
        </div>
    )
}
export default Contact