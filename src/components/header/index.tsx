import * as React from "react";
import Upperbar from "./upperbar";
import Lowerbar from "./lowerbar";
import { useState, useEffect } from "react";
import BottomDrawer from "./bottomdrawer";

export default function Header() {
  const [latestScroll, setLatestScroll] = useState(0);
  const [newScroll, setNewScroll] = useState(0);
  const [hideBar, setHideBar] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const changeNav = () => {
    setNewScroll(window.scrollY);
    if (newScroll > latestScroll) {
      setLatestScroll(newScroll);
      setHideBar(true);
    } else {
      setLatestScroll(newScroll);
      setHideBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, [latestScroll, newScroll, hideBar]);

  return (
    <header className="bg-white">
      <div>
        <Upperbar />
      </div>
      <Lowerbar handleOpen={handleOpen} open={open} />
      {open ? <BottomDrawer /> : null}
    </header>
  );
}
