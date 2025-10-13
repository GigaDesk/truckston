import * as React from "react";
import { Link } from "react-scroll";

export default function Upperbar() {
  return (
    <div
      className="grid lg:grid-cols-2 content-center h-[72px] px-12"
      style={{ fontFamily: "Graphik" }}
    >
      <div className="text-blue-700 font-semibold text-lg grid content-center max-lg:justify-items-center">
        Royal Kings Transporters
      </div>
      <div className="grid grid-cols-2 max-lg:hidden">
        <Link
          activeClass="font-medium"
          to="factors"
          spy={true}
          offset={-150}
          smooth={true}
          className="cursor-pointer"
        >
          <div>Factors to Consider Before Transportation</div>
        </Link>
        <Link
          activeClass="font-medium"
          to="reduce"
          spy={true}
          offset={-50}
          smooth={true}
          className="cursor-pointer"
        >
          <div>Reducing Costs</div>
        </Link>
      </div>
    </div>
  );
}
