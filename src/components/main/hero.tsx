import * as React from "react";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div
        className="relative z-30 text-2xl text-white bg-opacity-50 rounded-xl"
        style={{ fontFamily: "Graphik" }}
      >
        <h2 className="font-medium text-xxl">
          
        </h2>
        <h3 className="font-medium text-xxxl">
          
        </h3>
        <Link to="industries" offset={-100} spy={true} smooth={true}>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-950 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-20"
          >
            
            </button>
        </Link>
      </div>
      <img
        src="https://images.ctfassets.net/vjt7hlwnzx7i/5cTTiT8C5O0Z7e10d8YkQS/6954b73dbe1628b4125785888f313a9d/image.jpeg"
        className="absolute z-10"
      />
    </div>
  )
}