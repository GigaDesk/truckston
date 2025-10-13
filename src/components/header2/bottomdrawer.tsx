import * as React from "react";
import { Link } from "react-scroll";

export default function BottomDrawer() {
  return (
    <div
      className="grid grid-rows-6 px-12 text-lg border-b border-neutral-700"
      style={{ fontFamily: "Graphik" }}
    >
      <Link
        activeClass="bg-blue-700"
        to="safety"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Safety
      </Link>
      <Link
        activeClass="bg-blue-700"
        to="packaging"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Packaging
      </Link>
      <Link
        activeClass="bg-blue-700"
        to="time"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Time
      </Link>
      <Link
        activeClass="bg-blue-700"
        to="road"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Road
      </Link>
      <Link
        activeClass="bg-blue-700"
        to="cost"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Cost
      </Link>
    </div>
  );
}
