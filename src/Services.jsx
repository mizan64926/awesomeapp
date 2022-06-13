import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Services = () => {
  return (
    <>
      <section id="service-section">
        <div className="container-fluid" style={{ height: "20vh" }}>
          <h1 className="text-center">our services</h1>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                {Sdata.map((val, index) => {
                  return (
                    <>
                      <Card imgsrc={val.imgsrc} title={val.title} />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
