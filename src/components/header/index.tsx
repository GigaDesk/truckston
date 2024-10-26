import * as React from "react";
import Upperbar from "./upperbar";
import Lowerbar from "./lowerbar";

export default function Header() {
  return (
    <header className="h-32 bg-neutral-950 relative">
      <Upperbar />
      <Lowerbar />
    </header>
  );
}
