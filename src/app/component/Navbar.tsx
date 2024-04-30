import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { LinearGradient } from "react-text-gradients";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full mt-14">
      <span className="text-5xl font-bold font-mono">
        <LinearGradient gradient={["to top left", "#6fe3e1 ,#5257e5"]}>
          Project BW2RGBy
        </LinearGradient>
      </span>
      <div className="min-h-6">
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
