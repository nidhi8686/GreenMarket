import React from "react";

export default function ContactCard(props) {
  return (
    <div className="col-md-4 mb-3 p-4">
      <h4 style={{ color: "#95D850", fontFamily: "Kalam" }}>
        {props.heading.name}
      </h4>
      <div className="mt-3">
        {props.heading.content.map((value) => (
          <a className="d-block text-secondary my-2" href="#">
            {value}
          </a>
        ))}
      </div>
    </div>
  );
}
