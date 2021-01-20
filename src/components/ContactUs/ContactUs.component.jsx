import React, { useState } from "react";
import Contact from "../Contact/Contact.component";
import ColumnOne from "./ColumnOne.component";
import ColumnTwo from "./ColumnTwo.component";

export default function ContactUs() {
  const [contact1, setContact1] = useState({
    fa: "fa-home",
    name: "ADDRESS",
    content: "7563 St. Vicent Place, Glasgow",
  });
  const [contact2, setContact2] = useState({
    fa: "fa-phone",
    name: "PHONE",
    content: "+09123 456 789",
  });
  const [contact3, setContact3] = useState({
    fa: "fa-envelope",
    name: "EMAIL",
    content: "zemes@demolink.org",
  });
  const [follow1, setFollow1] = useState({
    fa: "fa-facebook",
    content: "FACEBOOK",
  });
  const [follow2, setFollow2] = useState({
    fa: "fa-instagram",
    content: "INSTAGRAM",
  });
  const [follow3, setFollow3] = useState({
    fa: "fa-youtube",
    content: "YOUTUBE",
  });
  const [follow4, setFollow4] = useState({
    fa: "fa-twitter",
    content: "TWITTER",
  });
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");


  return (
    <div>
      <div className="container pt-4 mb-4">
        <div className="row pt-3">
          <div className="col-md-4 p-4">
            <h5 className="mb-3">CONTACT</h5>
            <ColumnOne contact={contact1} />
            <hr />
            <ColumnOne contact={contact2} />
            <hr />
            <ColumnOne contact={contact3} />
          </div>
          <div className="col-md-4 p-4">
            <h5>GET IN TOUCH WITH US</h5>
            <form>
              <input
                type="text"
                value={name}
                name="name"
                placeholder="Name"
                className="form-control mb-3"
                onChange={e=> setName(e.target.value)}
              />
              <input
                type="email"
                value={email}
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                onChange={e=> setEmail(e.target.value)}
              />
              <textarea
                className="form-control mb-3"
                value={message}
                placeholder="Message"
                onChange={e=> setMessage(e.target.value)}
              ></textarea>
              <button className="btn btn-danger">SUBMIT</button>
            </form>
          </div>
          <div className="col-md-4 p-4">
            <h5 className="mb-4">FOLLOW US</h5>
            <ColumnTwo data={follow1} />
            <hr />
            <ColumnTwo data={follow2} />
            <hr />
            <ColumnTwo data={follow3} />
            <hr />
            <ColumnTwo data={follow4} />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
