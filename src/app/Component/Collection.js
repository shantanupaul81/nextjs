import Pic from "../Image/11.png";
import Pic2 from "../Image/22.png";
import Pic3 from "../Image/33.png";

import Image from "next/image";
import LeftSwipte from "./LeftSwipte";
import RightSwipe from "./RightSwipe";

const Collection = () => {
  return (
    <div className="dark:bg-black">
      <div className=" m-10 p-5 h-full bg-blue-100 dark:bg-slate-900 relative">
        <LeftSwipte/>
        <RightSwipe/>
        <div className="text-center">
          <h1 className="font-bold text-4xl">Collection Spotlight</h1>
          <p className="pt-2">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>

        {/* 1st cart */}

        <div className="flex justify-center max-md:flex-wrap sm:flex-wrap">
          <div className="p-4">
            <div className="py-4 px-2 shadow-lg bg-white dark:bg-slate-700 relative">
              <div className="flex justify-center items-center">
                <Image src={Pic} width={218} className="w-[250px]"></Image>
              </div>
              <div className="w-4 h-7 absolute -bottom-4 left-0 rounded-r-full rounded-l-2xl dark:bg-slate-900 bg-blue-100 shadow-none">

              </div>
              <div className="w-4 h-7 absolute -bottom-4 right-0 bg-blue-100 rounded-l-full rounded-r-2xl dark:bg-slate-900 shadow-none">

              </div>
            </div>
            <div className="border-dashed border-t-2 dark:border-gray-400 border-gray-600 bg-white px-2 py-3 dark:bg-slate-700">
              <p className="text-bold text-center font-medium p-1 ">
                Las Vegas Aviators
              </p>
              <p className="text-bold text-center font-medium p-1">
                Oct 15 | Sun |4:30 PM
              </p>

              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <div className="flex justify-center items-center mt-[10px]">
                <button className="bg-black	p-2 text-white">
                  Take Flight Collection
                </button>
              </div>
            </div>
          </div>

          {/* 2nd cart */}
          <div className="p-4">
            <div className="py-4 px-2 shadow-lg bg-white dark:bg-slate-700 relative">
              <div className="flex justify-center items-center">
                <Image src={Pic2} width={218} className="w-[250px]"></Image>
              </div>
              <div className="w-4 h-7 absolute -bottom-4 left-0 rounded-r-full rounded-l-2xl dark:bg-slate-900 bg-blue-100 shadow-none">

              </div>
              <div className="w-4 h-7 absolute -bottom-4 right-0  rounded-l-full rounded-r-2xl dark:bg-slate-900 bg-blue-100 shadow-none">

              </div>
            </div>
            <div className="border-dashed border-t-2 dark:border-gray-400 border-gray-600 bg-white px-2 py-3 dark:bg-slate-700">
              <p className="text-bold text-center font-medium p-1 ">
              Sacramento River Cats
              </p>
              <p className="text-bold text-center font-medium p-1">
                Oct 15 | Sun |4:30 PM
              </p>

              <p>Sutter Health Park, Sacramento, California</p>
              <div className="flex justify-center items-center mt-[10px]">
                <button className="bg-black	p-2 text-white">
                Orange Collection
                </button>
              </div>
            </div>
          </div>

          {/* 3rd Cart */}

          <div className="p-4">
            <div className="py-4 px-2 shadow-lg bg-white dark:bg-slate-700 relative">
              <div className="flex justify-center items-center">
                <Image src={Pic} width={218} className="w-[250px]"></Image>
              </div>
              <div className="w-4 h-7 absolute -bottom-4 left-0  rounded-r-full rounded-l-2xl dark:bg-slate-900 bg-blue-100 shadow-none">

              </div>
              <div className="w-4 h-7 absolute -bottom-4 right-0 rounded-l-full rounded-r-2xl dark:bg-slate-900 bg-blue-100 shadow-none">

              </div>
            </div>
            <div className="border-dashed border-t-2 dark:border-gray-400 border-gray-600 bg-white px-2 py-3 dark:bg-slate-700 ">
              <p className="text-bold text-center font-medium p-1 ">
                Las Vegas Aviators
              </p>
              <p className="text-bold text-center font-medium p-1">
                Oct 15 | Sun |4:30 PM
              </p>

              <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <div className="flex justify-center items-center mt-[10px]">
                <button className="bg-black	p-2 text-white">
                  Take Flight Collection
                </button>
              </div>
            </div>
          </div>
          {/* 2nd cart */}
          {/* <div className="p-4">
            <div className="py-4 px-2 shadow-lg bg-white max-md:w-[310px] dark:bg-slate-700">
              <div className="flex justify-center items-center">
                <Image src={Pic2} width={218} className="w-[250px]"></Image>
              </div>
              <div className="border-dashed border-t-2 border-gray-600">
                <p className="text-bold text-center font-medium p-1">
                  Sacramento River Cats{" "}
                </p>
                <p className="text-bold text-center font-medium p-1">
                  Oct 15 | Sun |4:30 PM
                </p>

                <p>Sutter Health Park, Sacramento, California</p>
                <div className="flex justify-center items-center mt-[10px]">
                  <button className="bg-black	p-2 text-white">
                    Orange Collection
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          {/* 3rd Cart */}
          {/* <div className="p-4">
            <div className="py-4 px-2 shadow-lg bg-white dark:bg-slate-700">
              <div className="flex justify-center items-center">
                <Image src={Pic3} width={218} className="w-[250px]"></Image>
              </div>
              <div className="border-dashed border-t-2 border-gray-600">
                <p className="text-bold text-center font-medium p-1">
                  Las Vegas Aviators
                </p>
                <p className="text-bold text-center font-medium p-1">
                  Oct 15 | Sun |4:30 PM
                </p>

                <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
                <div className="flex justify-center items-center mt-[10px]">
                  <button className="bg-black	p-2 text-white">
                    Take Flight Collection
                  </button>
                </div>
              </div>
            </div>
          </div> */}



        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Collection;
