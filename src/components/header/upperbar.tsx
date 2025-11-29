import * as React from "react";
import { Link } from "react-scroll";
import PhoneIcon from '@mui/icons-material/Phone';

export default function Upperbar() {
  return (
    <div
      className="grid lg:grid-cols-[1fr_2fr] content-center h-[72px] px-12"
      style={{ fontFamily: "Graphik" }}
    >
      <div className=" text-lg grid max-lg:grid-rows-2 content-center max-lg:justify-items-center">
       <div className="text-blue-700  font-semibold">Royal Kings Transporters</div>
       <div className="lg:hidden"><PhoneIcon /> +254703288799</div>
      </div>
      <div className="grid grid-cols-5 max-lg:hidden">
        <Link
          activeClass="font-medium"
          to="do"
          spy={true}
          offset={-150}
          smooth={true}
          className="cursor-pointer"
        >
          <div>Our Services</div>
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
          to="faq"
          spy={true}
          offset={-150}
          smooth={true}
          className="cursor-pointer"
        >
          <div>Frequently Asked Questions</div>
        </Link>
        <div><PhoneIcon /> +254703288799</div>
      </div>
    </div>
  );
}
