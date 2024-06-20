import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [message, setMessage] = useState('');

    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        const currentForm = form.current;
        if (currentForm == null) return;
    
        emailjs
          .sendForm(import.meta.env.VITE_ID, import.meta.env.VITE_T_ID, currentForm, {
            publicKey: import.meta.env.VITE_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setMessage("Message successfully sent!")
              console.log(message)
              setTimeout(() => {
                setMessage('')
              }, 5000);
              console.log(message)
            },
            (error) => {
              console.log('FAILED...', error.text);
              setMessage("Message Failed. Please try again!")
              setTimeout(() => {
                setMessage('')
              }, 5000);
            },
          );
      };

    return(
        <div className="w-full flex flex-col items-center pb-24 relative " id="contact">
            <div className="flex w-full justify-center items-center gap-3 pb-24">
                <div className="w-1/4 h-1 bg-white sh"></div>
        <h1 className="text-2xl font-black font text-white">Contact</h1>
        <div className="w-1/4 h-1 bg-white sh"></div>
        </div>
        <div className="w-full">
            <form className="flex flex-col gap-10 w-full items-center" ref={form} onSubmit={sendEmail}>
                <input type="text" 
                 placeholder="Name"
                 maxLength={30} 
                 name="user_name"
                 className=" w-1/2 max-md:w-2/3 bg-black text-white  placeholder-white border-2 border-white rounded-sm px-4 py-4"
                 required
                 />
                 
                <input type="email"
                 placeholder="Email"
                 maxLength={40}
                 name="user_email"
                 className="w-1/2 max-md:w-2/3  bg-black text-white placeholder-white border-2 border-white rounded-sm px-4 py-4 "
                 required
                 />
                <textarea  placeholder="Message" rows={5} cols={4}
                className="w-1/2 max-md:w-2/3 bg-black text-white placeholder-white border-2 border-white rounded-sm px-4 py-2"
                maxLength={250}
                name='message'
                required
                ></textarea>
                <div className="relative">
                <button type="submit"
                value="Send"
                className="self-center text-white test rounded-lg border-2 border-white w-36 h-12 chakra">Send</button>
                
                </div>
            </form>
            {message &&
            <p className='absolute top-[10%] right-[10%] text-white font2 '>{message}</p>
           
            }
        </div>
        </div>
    )
}
export default Contact