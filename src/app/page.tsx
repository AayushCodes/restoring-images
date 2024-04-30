"use client";
import { useEffect, useState } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
// import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IoIosArrowDropdown } from "react-icons/io";
import Navbar from "./component/Navbar";
import Input from "./component/Input";

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
  const [file, setFile] = useState();
  const [selectedProcess, setSelectedProcess] = useState("Select Process");

  const handleMenuItemClick = (processName: string) => {
    setSelectedProcess(processName);
  };

  useEffect(() => {
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }, [file]);

  console.log("file", file);
  console.log("image", image);

  return (
    <main className="flex flex-col items-center justify-center bg-black font-sans h-screen w-screen text-white overflow-auto">
      <Navbar />
      <div className="flex justify-center gap-32 w-full h-full items-center py-20">
        <div className="flex flex-col items-center gap-6 justify-center">
          <span className="text-center text-xl font-semibold">Input</span>
          <Input file={file} setFile={setFile} />
        </div>
        <div className="p-2 bg-blue-500 rounded-lg w-fit">
          <button className="">{selectedProcess} |</button>
          <span className="align-middle">
            <Menu>
              <MenuButton className="pl-1 mt-1">
                <IoIosArrowDropdown />
              </MenuButton>
              <div className="text-black">
                <MenuList bg="gray.200">
                  <MenuItem
                    bg="gray.200"
                    onClick={() => handleMenuItemClick("Face Restoration")}
                  >
                    Face restoration
                  </MenuItem>
                  <MenuItem
                    bg="gray.200"
                    onClick={() => handleMenuItemClick("Image Upscaling")}
                  >
                    Image upscaling
                  </MenuItem>
                  <MenuItem
                    bg="gray.200"
                    onClick={() => handleMenuItemClick("Color Correction")}
                  >
                    Color correction
                  </MenuItem>
                  <MenuItem
                    bg="gray.200"
                    onClick={() => handleMenuItemClick("Scratch Removal")}
                  >
                    Scratch removal
                  </MenuItem>
                </MenuList>
              </div>
            </Menu>
          </span>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center h-full">
          <span className="text-center text-xl font-semibold">Result</span>
          <div
            style={{ maxWidth: "500px", minHeight: "100px" }}
            className="ring-1 ring-white rounded-lg overflow-hidden"
          >
            <ReactBeforeSliderComponent
              firstImage={image ? { imageUrl: image } : FIRST_IMAGE}
              secondImage={SECOND_IMAGE}
              withResizeFeel={true}
              feelsOnlyTheDelimiter={true}
              delimiterColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
