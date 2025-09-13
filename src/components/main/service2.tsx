import * as React from "react";

export default function Service2(props) {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className=" text-xl text-white bg-neutral-950 font-medium pt-20 flex flex-wrap-reverse md:grid md:grid-cols-2 gap-20"
    >
      <div className="">
        <hr className="w-8 h-1 bg-purple-950 border-0" />
        <h3 className="py-6"> {props.name} </h3>
        <p className="text-base font-normal">{props.description}</p>
      </div>
      <div>
        <video width="720" height="480" autoPlay muted src={props.video}  className="w-88 h-80 object-cover" loop />
      </div>
    </div>
  );
}
