import * as React from "react";

export default function Upperbar() {
  return (
    <div
      className="text-white grid lg:grid-cols-2 content-center h-[72px] px-12"
      style={{ fontFamily: "Graphik" }}
    >
      <div className="text-purple-700 font-semibold text-lg grid content-center max-lg:justify-items-center">
        GigaDesk
      </div>
      <div className="grid grid-cols-3 max-lg:hidden">
        <div>What we do</div>
        <div>What we think</div>
        <div>Who we are</div>
      </div>
    </div>
  );
}
