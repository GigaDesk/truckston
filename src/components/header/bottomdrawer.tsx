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
        to="platforms"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Royal Full Load
      </Link>
      <Link
        activeClass="bg-blue-700"
        to="security"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Royal Consolidation
      </Link>
      <Link
        activeClass="bg-blue-700"
        to="data"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Royal Express
      </Link>
      <Link
        activeClass="bg-blue-700"
        to="cargo"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Royal Special
      </Link>
    </div>
  );
}
