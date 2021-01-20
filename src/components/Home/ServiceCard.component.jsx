import React from "react";

export default function ServiceCard(props) {
  return (
    <div className="col-md-3 my-3">
      <div
        className="card border-0"
        style={{ boxShadow: "0px 0px 4px 1px #ccc" }}
      >
        <div className="card-body">
          <h4>{props.Service.name}</h4>
          <p style={{ fontFamily: "sans-serif"}} className="pt-2 pr-2">{props.Service.content}</p>
        </div>
      </div>
    </div>
  );
}
