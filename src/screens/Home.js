import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="m-3">
        <Card />
      </div>

      <Footer />
    </>
  );
}
