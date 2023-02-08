import React, { useRef, useState } from "react";

import heroVideo from "../assets/heroVideo.mp4";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />

      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${
          isVideoPlaying ? "" : "bg-black/80"
        } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
      >
        <h3 className="text-3xl lg:text-4xl mt-2"><span className="text-orange-500 font-bold">GDSC RKMGEC</span> presents</h3>
        <h1 className="text-5xl lg:text-7xl capitalize animate-pulse">
         <span className="font-bold">ENVISION</span> 2023
        </h1>
        <h4 className="text-3xl lg:text-4xl capitalize mb-6">
         A <span className="text-green-500 font-bold">Technical</span> Festival
        </h4>

        <div className="flex flex-row justify-center items-center">
          <GradientBtn className="capitalize mr-3" title="Coming Soon" />
          {/* <GradientBtn className="capitalize mx-12" title="Activities" /> */}

          {isVideoPlaying ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handleVideoPlay}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
