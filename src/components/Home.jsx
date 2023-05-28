import React from "react";

//import icons
import { HiArrowNarrowRight } from "react-icons/hi";

//import the scroll functionality
import { Link } from "react-scroll";

//import typed
import Typed from "react-typed";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen ">
      {/* {Container} */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Amir Hossein Khoobru
        </h1>
        <h2 className="text-4xl sm:text7xl font-bold text-[#8892b0]">
          I'm a{" "}
          <Typed
            strings={["Front End Developer.", "Full Stack Developer (soon)!"]}
            typeSpeed={85}
            backSpeed={75}
            loop
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a front-end Developer specializing in building exceptional digital
          experiences. Currently, I'm focused on building functional websites
          using REACT and as soon as possible, I'm going to start NODE to become
          a full-stack developer.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
            <Link to="about" smooth={true} duration={500}>
              View About
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;