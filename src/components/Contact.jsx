import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/e994c27f-0c6e-4068-9825-8e6e7768300c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-200 py-4">
            // Submit the form below or shoot me an email -{" "}
            <span className="text-xl font-bold  text-gray-500">
              1amirhossein.k.h.1@gmail.com
            </span>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 hover:outline-none rounded-md"
          type="text"
          name="name"
          placeholder="Name*"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] hover:outline-none rounded-md"
          type="email"
          name="email"
          placeholder="Email*"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 hover:outline-none rounded-md"
          name="message"
          rows="10"
          placeholder="Message*"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
