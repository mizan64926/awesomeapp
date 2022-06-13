import React from "react";
import Web from "./img/spain.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="this is about page"
        imgsrc={Web}
        btname="Click me"
        visit="./services"
      />
    </>
  );
};
export default About;
