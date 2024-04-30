import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full mt-14">
      <span className="text-5xl font-bold font-mono">Project BW2RGBy</span>
      <div className="min-h-10 font-medium">
        <Typewriter
          words={["Bringing Old Images Back To Life", "Restoring Memories"]}
          loop={Infinity}
          deleteSpeed={100}
          typeSpeed={80}
        />
      </div>
    </div>
  );
};

export default Navbar;
