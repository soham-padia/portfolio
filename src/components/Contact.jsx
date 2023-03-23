import emailjs from "@emailjs/browser";
import React,{useRef, useState} from "react";
import Map from "./Map";
import { motion } from "framer-motion";

export const Contact = () => {

  const ref=useRef()

  const [success,setSuccess]=useState(null)
  const [loading,setLoading]=useState(false)

  const handleSubmit = e =>{
    e.preventDefault()
    setLoading(true)
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,ref.current, import.meta.env.VITE_PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
      setSuccess(true)
    }, (error) => {
      console.log(error.text);
      if(error) {
        setSuccess(false)
      }
    });
  }

  return (
    <div id="contact" className="md:h-screen h-fit snap-center">
      <div className="w-screen md:h-screen h-fit flex flex-col md:flex-row justify-between gap-20">
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.25}} className="basis-1/2 flex items-center justify-end">
          <form ref={ref} onSubmit={handleSubmit} className="w-[500px] flex flex-col gap-6 ">
            <h1 className="font-mono font-light text-3xl">Contact Me</h1>
            <input type="text" name="name" placeholder="Name" required  className="p-5 text-black font-semibold bg-gray-300 border-none rounded-md"/>
            <input type="email" name="email" placeholder="Email" required className="p-5 text-black font-semibold bg-gray-300 border-none rounded-md"/>
            <textarea
              name="message"
              placeholder="Write your message"
              cols="30"
              rows="10"
              required
              className="p-5 text-black font-semibold bg-gray-300 border-none rounded-md"
            ></textarea>
            <button type="submit" disabled={loading} className="bg-[#da4ea2] p-5 border-none rounded-md">Send</button>
            {success && 
              "Your message has been sent. I'll get back to you soon :)"}
          </form>
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.25}} className="basis-1/2">
          <Map/>
        </motion.div>
      </div>
    </div>
  );
};
