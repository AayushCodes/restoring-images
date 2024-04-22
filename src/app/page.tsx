"use client";
import { useState } from "react";

import { Typewriter } from "react-simple-typewriter";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import Image from "next/image";

const FIRST_IMAGE = {
  imageUrl:
    "https://replicate.delivery/mgxm/7869b8fd-2393-450b-8fd0-281f00eedef9/a.png",
};
const SECOND_IMAGE = {
  imageUrl:
    "https://replicate.delivery/mgxm/18b02ad9-ae81-4044-800e-65732df6bdc7/out.png",
};

export default function Home() {
  const [image, setImage] = useState<string | null>(null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <main className="flex flex-col items-center justify-center bg-black font-mono h-screen w-screen pt-28 px-60">
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        <span className="text-5xl">Project Chimera</span>
        <div className="min-h-10">
          <Typewriter
            words={["Bringing old images back to life", "Restoring memories"]}
            loop={Infinity}
            deleteSpeed={80}
            typeSpeed={100}
          />
        </div>
      </div>
      <div className="flex justify-evenly w-full h-full items-center py-20">
        <div className="flex flex-col gap-10 w-1/2 items-center">
          <div className="flex h-96 w-96 overflow-hidden border border-dashed items-center justify-center relative">
            {image ? (
              <Image
                src={image}
                alt="Uploaded"
                layout="fill"
                objectFit="contain"
              />
            ) : (
              <p>No image uploaded</p>
            )}
          </div>
          <div className="flex justify-between w-1/2">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={onImageChange}
              style={{ display: "none" }}
            />
            <button
              className="p-2 bg-blue-500 ring-1 ring-white rounded-lg"
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              Upload Image
            </button>
            <button className="p-2 bg-green-500 ring-1 ring-white rounded-lg w-fit">
              Process
            </button>
          </div>
        </div>
        <div className="h-80 min-h-[1em] w-0.5 bg-neutral-100 dark:bg-white/30" />
        <div className="flex flex-col gap-6 justify-start h-full">
          <span className="text-center text-xl underline">Result</span>
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
          />
        </div>
      </div>
    </main>
  );
}
