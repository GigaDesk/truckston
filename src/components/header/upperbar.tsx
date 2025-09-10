import * as React from "react";
import { Link } from "react-scroll";

export default function Upperbar() {
  return (
    <div
      className="text-white grid lg:grid-cols-2 content-center h-[72px] px-12"
      style={{ fontFamily: "Graphik" }}
    >
      <div className="text-purple-700 font-semibold text-lg grid content-center max-lg:justify-items-center">
        Royal Kings Transporters
      </div>
      <div className="grid grid-cols-3 max-lg:hidden">
        <Link
          activeClass="font-medium"
          to="do"
          spy={true}
          offset={-150}
          smooth={true}
          className="cursor-pointer"
        >
          <div>What we do</div>
        </Link>
        <Link
          activeClass="font-medium"
          to="think"
          spy={true}
          offset={-150}
          smooth={true}
          className="cursor-pointer"
        >
          <div>Our Blog</div>
        </Link>
        <Link
          activeClass="font-medium"
          to="are"
          spy={true}
          offset={-50}
          smooth={true}
          className="cursor-pointer"
        >
          <div>Who we are</div>
        </Link>
      </div>
    </div>
  );
}
