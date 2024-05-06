"use client";
import { useEffect, useState } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
// import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IoIosArrowDropdown } from "react-icons/io";
import Navbar from "./component/Navbar";
import Input from "./component/Input";
import { ScaleLoader } from "react-spinners";

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
  const [isLoading, setIsLoading] = useState(false);

  const handleMenuItemClick = (processName: string) => {
    setSelectedProcess(processName);
  };

  useEffect(() => {
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }, [file]);

  const handleButtonClick = async () => {
    if (selectedProcess === "Select Process") {
      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    formData.append("process", selectedProcess);
    const res = await fetch("/api/process", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setImage(data.image);
    setIsLoading(false);
  };

  const iconStyle = {
    backgroundImage:
      "url(https://www.flaticon.com/free-icon/double-arrow_724913)",
  };

  return (
    <main className="flex flex-col items-center justify-center bg-black font-sans h-screen w-screen text-white overflow-auto">
      <Navbar />
      <div className="flex justify-center gap-32 w-full h-full items-center py-20">
        <div className="flex flex-col items-center gap-6 justify-center">
          <span className="text-center text-xl font-semibold">Input</span>
          <Input file={file} setFile={setFile} />
        </div>
        {isLoading ? (
          <div className="p-2 mx-14">
            <ScaleLoader color="#2196f3" height={20} width={3} />
          </div>
        ) : (
          <div className="p-2 bg-blue-500 rounded-lg w-fit">
            <button onClick={handleButtonClick}>{selectedProcess} |</button>
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
        )}
        <div className="flex flex-col gap-6 justify-center items-center h-full">
          <span className="text-center text-xl font-semibold">Result</span>
          <div
            style={{
              maxWidth: "400px",
              minHeight: "100px",
              maxHeight: "500px",
            }}
            className="ring-1 ring-white rounded-lg overflow-hidden"
          >
            <ReactBeforeSliderComponent
              firstImage={image ? { imageUrl: image } : FIRST_IMAGE}
              secondImage={SECOND_IMAGE}
              withResizeFeel={true}
              feelsOnlyTheDelimiter={true}
              delimiterColor="#ffffff"
              delimiterIconStyles={iconStyle}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
