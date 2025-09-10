import * as React from "react";
import { Link } from "react-scroll";

export default function BottomDrawer() {
  return (
    <div
      className="text-white grid grid-rows-6 px-12 bg-neutral-900 text-lg border-b border-neutral-700"
      style={{ fontFamily: "Graphik" }}
    >
      <Link
        activeClass="bg-purple-700"
        to="platforms"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        RKT Translocation
      </Link>
      <Link
        activeClass="bg-purple-700"
        to="security"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        RKT Consolidation
      </Link>
      <Link
        activeClass="bg-purple-700"
        to="data"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Royal Express
      </Link>
    </div>
  );
}
