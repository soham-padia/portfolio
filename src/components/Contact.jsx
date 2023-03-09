import React from "react";

export const Contact = () => {
  return (
    <div className="h-screen snap-center">
      <div className="w-screen h-screen flex justify-between gap-20">
        <div className="basis-1/2 flex items-center justify-end">
          <form action="" className="w-[500px] flex flex-col gap-6 ">
            <h1 className="font-mono font-light text-3xl">Contact Me</h1>
            <input type="text" name="name" placeholder="Name"  className="p-5 bg-gray-300 border-none rounded-md"/>
            <input type="email" name="email" placeholder="Email" className="p-5 bg-gray-300 border-none rounded-md"/>
            <textarea
              name="message"
              placeholder="Write your message"
              cols="30"
              rows="10"
              className="p-5 bg-gray-300 border-none rounded-md"
            ></textarea>
            <button type="submit" className="bg-[#da4ea2] p-5 border-none rounded-md">Send</button>
          </form>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </div>
  );
};
