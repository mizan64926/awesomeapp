import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="col-4">
        <div className="card">
          <img
            className="card-img-top mx-auto"
            src={props.imgsrc}
            alt={props.imgsrc}
            style={{ height: "200px", width: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">lorem10</p>
            <Link to="/" className="btn btn-primary">
              click me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
