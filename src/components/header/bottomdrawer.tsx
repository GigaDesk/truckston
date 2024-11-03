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
        Platforms
      </Link>
      <Link
        activeClass="bg-purple-700"
        to="security"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Security
      </Link>
      <Link
        activeClass="bg-purple-700"
        to="data"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Data
      </Link>
      <Link
        activeClass="bg-purple-700"
        to="seo"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        SEO
      </Link>
      <Link
        activeClass="bg-purple-700"
        to="outsourcing"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Outsourcing
      </Link>
      <Link
        activeClass="bg-purple-700"
        to="cloud"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        Cloud
      </Link>
    </div>
  );
}
