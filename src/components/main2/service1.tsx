import * as React from "react";

export default function Service1(props) {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className=" text-xl text-white bg-neutral-950 font-medium pt-20 grid gap-20"
    >
      <div className="">
        <hr className="w-8 h-1 bg-purple-950 border-0" />
        <h3 className="py-6"> {props.name} </h3>
        <p className="text-base font-normal">{props.description}</p>
      </div>
    </div>
  );
}
