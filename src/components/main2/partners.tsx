import * as React from "react";
import { useState } from "react";

export default function Partners() {
  const [folioActive, setFolioActive] = useState(false);

  const handleFolioTrue = () => {
    setFolioActive(true);
  };

  const handleFolioFalse = () => {
    setFolioActive(false);
  };

  const [kmgActive, setKmgActive] = useState(false);

  const handleKmgTrue = () => {
    setKmgActive(true);
  };

  const handleKmgFalse = () => {
    setKmgActive(false);
  };

  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className=" text-xl text-white bg-neutral-950 font-medium pt-20 pb-20 grid md:grid-cols-2 gap-20"
    >
      <div
        className="text-blue-700 font-semibold text-lg grid content-center bg-white hover:bg-blue-700 hover:text-white cursor-pointer justify-items-center bg-white min-h-52"
        onMouseOver={handleFolioTrue}
        onMouseOut={handleFolioFalse}
      >
        {folioActive ? (
          <div className="font-normal text-base p-4 md:p-14">
            Our strategic alliance with Folio empowers us to provide
            comprehensive business solutions. By leveraging Folio's deep
            financial expertise and our technological innovation, we offer a
            seamless blend of services, including tax, audit, accounting,
            management consulting, and digital transformation. Experience the
            future of business, today.
          </div>
        ) : (
          "Folio"
        )}
      </div>
      <div
        className="grid font-medium text-xxxl text-green-950 content-center bg-white hover:bg-green-950 hover:text-white cursor-pointer justify-items-center min-h-52"
        onMouseOver={handleKmgTrue}
        onMouseOut={handleKmgFalse}
      >
        {kmgActive ? (
          <div className="font-normal text-base p-4 md:p-14">
            Backed by the KMG Group, we harness the power of technology to
            revolutionize businesses across diverse sectors. Our partnership
            with KMG provides us with a unique understanding of
            industry-specific challenges and opportunities, enabling us to
            deliver tailored solutions that drive growth and efficiency.
          </div>
        ) : (
          "KMG"
        )}
      </div>
    </div>
  );
}
