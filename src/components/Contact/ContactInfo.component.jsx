import React, { useState } from "react";

export default function ContactInfo(props) {
  return (
    <div className="d-flex align-items-center mt-3">
      <div
        style={{ width: "40px", height: "40px", border: "3px dotted #ccc" }}
        className="rounded-circle d-flex justify-content-center align-items-center"
      >
        <i className={`fa text-secondary ${props.contactInfo.fa}`}></i>
      </div>
      <h6 className="ml-2 text-secondary">{props.contactInfo.data}</h6>
    </div>
  );
}
