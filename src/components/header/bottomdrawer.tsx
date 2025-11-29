import * as React from "react";
import { Link } from "react-scroll";

export default function BottomDrawer() {
  return (
    <div
      className="grid grid-rows-6 text-lg border-b border-neutral-700"
      style={{ fontFamily: "Graphik" }}
    >
      <Link
        activeClass="bg-blue-700"
        to="do"
        spy={true}
        offset={-50}
        smooth={true}
        className="px-12"
      >
        Our Services
      </Link>
      <Link
        activeClass="bg-blue-700"
        to="are"
        spy={true}
        offset={-50}
        smooth={true}
        className="px-12"
      >
        Who we are
      </Link>
      <Link
        activeClass="bg-blue-700"
        to="think"
        spy={true}
        offset={-50}
        smooth={true}
        className="px-12"
      >
        Our Blog
      </Link>
      <Link
        activeClass="bg-blue-700"
        to="faq"
        spy={true}
        offset={-50}
        smooth={true}
        className="px-12"
      >
        Frequently Asked Questions
      </Link>
    </div>
  );
}
