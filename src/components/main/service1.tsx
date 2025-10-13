import * as React from "react";

export default function Service1(props) {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className=" text-xl font-medium pt-20 grid md:grid-cols-2 gap-20"
    >
      <div>
        <video width="720" height="480" autoPlay muted src={props.video} loop />
      </div>
      <div className="">
        <hr className="w-8 h-1 bg-blue-700 border-0" />
        <h3 className="py-6"> {props.name} </h3>
        <p className="text-base font-normal">{props.description}</p>
      </div>
    </div>
  );
}
