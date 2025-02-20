import React from "react";
import NavBar from "../component/NavBar";

const Contact = () => {
  return (
    <div>
      <section>
        <h1 className="text-2xl font-bold text-black text-center">Get in Touch</h1>
        <form className="p-5 bg-white flex flex-col justify-center items-center">
          <div className="flex flex-col items-start gap-y-2">
            <label for="name">Name:</label>
            <input className="p-2 border-2 outline-none rounded-sm" type="text" id="name" name="name" required />
          </div>
          <div className="flex flex-col items-start gap-y-2">
            <label for="contact">contact:</label>
            <input className="p-2 border-2 outline-none rounded-sm" type="text" id="contact" name="contact" required />
          </div>
          <div className="flex flex-col items-start gap-y-2">
            <label for="name">Message:</label>
            <textarea className="border-2" placeholder="enter message or enquiry"></textarea>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
