import React from "react";

const RightSwipe = () => {
  return (
    <div className="absolute top-[50%] cursor-pointer hidden sm:block right-16 sm:right-4">
      <div className="w-12 h-12 border-sky-500 border flex justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#86D1F3"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default RightSwipe;
