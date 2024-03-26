import Image from "next/image";
import Img from "../app/Image/1.png";
import Img2 from "../app/Image/2.png";
import Img3 from "../app/Image/3.png";
import Img4 from "../app/Image/4.png";
import Collection from "./Component/Collection";


const page = () => {


  return (
    <div className="dark:text-white dark:bg-black">
      {/* Top section start here: */}
      <div className=" m-10 p-5 h-full">
        {/* Header line */}
        <div>
          <h2 className="text-xl font-bold uppercase">Sports</h2>
          <div className="border-blue-600 border-2 border-solid rounded-md w-[85px]"></div>
        </div>
        {/* 1st div */}
        <div className="flex justify-center max-md:flex-wrap">
          <div className="p-4">
            <div className="p-4 shadow-lg dark:bg-slate-700">
              <Image src={Img} width={218} className="w-[250px]"></Image>
              <p className="text-bold text-center font-medium">
                Sacramento River Cats
              </p>
              <div className="bg-gray-200 rounded-md p-2 dark:bg-slate-800 dark:text-white">
                <div className=" flex justify-between text-gray-600 dark:text-gray-400">
                  <p>Total Event</p>
                  <p>Sport</p>
                </div>
                <div className=" flex justify-between font-bold">
                  <p>48 Events</p>
                  <p>Baseball</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd div */}
          <div className="p-4">
            <div className="p-4 shadow-lg dark:bg-slate-700">
              <Image src={Img2} className="w-[250px]"></Image>
              <p className="text-bold text-center font-medium">
              Las Vegas Aviators
              </p>
              <div className="bg-gray-200 rounded-md p-2 dark:bg-slate-800 dark:text-white">
                <div className=" flex justify-between text-gray-600 dark:text-gray-400">
                  <p>Total Event</p>
                  <p>Sport</p>
                </div>
                <div className=" flex justify-between font-bold">
                  <p>25 Events</p>
                  <p>Baseball</p>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd div*/}
          <div className="p-4">
            <div className="p-4 shadow-lg dark:bg-slate-700">
              <Image src={Img3} width={218} className="w-[250px]"></Image>
              <p className="text-bold text-center font-medium">
              New jersey devils
              </p>
              <div className="bg-gray-200 rounded-md p-2 dark:bg-slate-800 dark:text-white">
                <div className=" flex justify-between text-gray-600 dark:text-gray-400">
                  <p>Total Event</p>
                  <p>Sport</p>
                </div>
                <div className=" flex justify-between font-bold">
                  <p>50 Events</p>
                  <p>Ice Hockey</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4th div*/}
          <div className="p-4">
            <div className="p-4 shadow-lg dark:bg-slate-700">
              <Image src={Img2} className="w-[250px]"></Image>
              <p className="text-bold text-center font-medium">
              Las Vegas Aviators              </p>
              <div className="bg-gray-200 rounded-md p-2 dark:bg-slate-800 dark:text-white">
                <div className=" flex justify-between text-gray-600 dark:text-gray-400">
                  <p>Total Event</p>
                  <p>Sport</p>
                </div>
                <div className=" flex justify-between font-bold">
                  <p>28 Events</p>
                  <p>Baseball</p>
                </div>
              </div>
            </div>
          </div>
          {/* 5th div*/}
          <div className="p-4 h-full w-[350px] max-md:w-[320px]">
            <div className="p-4 shadow-lg h-auto dark:bg-slate-700">
              <div className="relative inline-block">
                <Image src={Img4} className="w-[250px]"></Image>
                <p className="bg-black px-4 text-white rounded absolute top-0 right-0">
                  Ad
                </p>
              </div>

              <p className="text-bold text-center font-medium uppercase p-5">
                Advertisement title
              </p>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore molestias eveniet in asperiores perferendis recusandae
                  quisquam, debitis sit rerum libero.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Button section */}
        <div className="flex justify-center items-center">
          <button className="bg-blue-600 text-white p-3 rounded-md uppercase">
            See More
          </button>
        </div>

        {/* Top section end here */}
      </div>
      <Collection />
    </div>
  );
};

export default page;
