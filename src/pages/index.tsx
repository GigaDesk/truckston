import * as React from "react";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0">
        <Header />
      </div>
      <Main />
      <Footer />
    </div>
  );
}
