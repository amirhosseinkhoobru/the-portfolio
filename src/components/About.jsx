import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Amir, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              When i first start coding, I did'nt enjoy it that much to be
              honest. there is no joy in building websites just using HTML &
              CSS. after 2 months, I started to learn JAVA-SCRIPT. Like any
              newbie, in this part of my coding journey, I was complaining and
              naging all day long that what is this code bro! what am i gonna do
              with it?? where am i gonna use it and blahblahblah... until i
              started learning REACT, and i completely fall in love in coding
              and most importently JAVA-SCRIPT. Now, I'm ready to start the
              NODE.JS to become a Full-stack developer...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
