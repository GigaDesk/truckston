import * as React from "react";
import Header from "../components/header2";
import Main from "../components/main2";
import Footer from "../components/footer";

export default function Blog() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-20">
        <Header />
      </div>
      <Main />
      <Footer />
    </div>
  );
}