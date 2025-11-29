import * as React from "react";

export default function Faq(props) {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className=" text-xl font-medium pt-20 grid gap-20"
    >
      <div className="">
        <hr className="w-8 h-1 bg-blue-700 border-0" />
        <h3 className="py-6"> {props.question} </h3>
        <p className="text-base font-normal">{props.answer}</p>
      </div>
    </div>
  );
}