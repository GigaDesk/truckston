import * as React from "react";
import { Link } from "react-scroll";
import ReactWhatsapp from "react-whatsapp";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div
        className="relative z-30 text-2xl text-white bg-opacity-50 rounded-xl lg:pr-64 pl-2"
        style={{ fontFamily: "Graphik" }}
      >
        <h2 className="font-medium text-xxl pb-4 lg:pr-48 pt-28">
          Experience timely and efficient door-to-door transportation as it should be
        </h2>
        <p className="font-normal text-base lg:pr-28">
          From urgent deliveries to specialized cargo, <span className="font-medium pr-2">Royal Transportation</span>
          offers a service for every need. Choose <span className="font-medium pr-2">Royal Consolidation</span> for
          cost-effective co-transportation of multiple clients' goods, or <span className="font-medium pr-2">Royal
          Full Load</span>when you need maximum capacity for a single shipment. For
          time-critical demands, our <span className="font-medium pr-2">Royal Express</span> service guarantees urgent and
          direct delivery. And for your most sensitive items, <span className="font-medium pr-2">Royal Special</span>
          provides customized, expert handling of everything from glass panels
          to machinery and saloon cars. Whatever your cargo, trust the Royal
          standard of care and efficiency.
        </p>
        <div className="grid grid-cols-2 justify-items-start">
        <ReactWhatsapp number="+254703288799" element="button">
          <button
            type="button"
            className="focus:outline-none text-white bg-amber-500 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-12"
          >
            Get a Quote
          </button>
        </ReactWhatsapp>
        <p className="font-medium text-lg md:text-xxl py-2.5 mt-12">
       Call: +254703288799
        </p>
        </div>
      </div>
      <img
        src="https://images.ctfassets.net/vjt7hlwnzx7i/5cTTiT8C5O0Z7e10d8YkQS/6954b73dbe1628b4125785888f313a9d/image.jpeg"
        className="absolute z-10 max-lg:w-auto max-lg:min-w-full max-lg:min-h-full max-lg:max-w-none"
      />
    </div>
  );
}
