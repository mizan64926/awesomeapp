import React from "react";
import web from "./img/spain.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        btname="Get started"
        visit="./services"
      />
    </>
  );
};
export default Home;
