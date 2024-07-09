import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="wrapper ">
      <div className="flex justify-around">
        <div className="flex justify-center flex-col items-center">
          <img
            className="w-[30%] h-[50%] mt-4"
            src="QR-CODE.jpg"
            alt="qrcode"
          />
          <div>
            <p className="text-blue-800 text-3xl ">or</p>
            <Link to="/fillForm" target="_blank" className="text-blue-700 text-5xl">Click to Open Job Form</Link>
          </div>
        </div>

        <img
          className="w-[40%] h-[40%]"
          src="scan.jpg"
          width="50%"
          alt="scan"
        />
      </div>
    </div>
  );
}

export default Hero;
