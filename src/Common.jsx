import React from "react";
import { Link, NavLink } from "react-router-dom";

import web from "./img/spain.png";

const Common = (props) => {
  return (
    <>
      <section id="header_section">
        <div class="container-fluid">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-4">
              <h1>
                {props.name}
                <strong className="text-primary"> Thapa Technical</strong>
              </h1>
              <p>we are the team of talented developer making websites</p>
              <Link
                to={props.visit}
                className="btn btn-outline-primary btn_get_started"
              >
                {props.btname}
              </Link>
            </div>
            <div className="col-4 header_image order-1">
              <img src={props.imgsrc} className="img-fluid animated" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
