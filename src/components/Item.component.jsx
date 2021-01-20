import React from "react";
import Stars from "simple-rating-stars";

import "./Item.css";

export default function Item(props) {
  return (
    <div className="col-md-3 mb-3">
      <div className="card border-0 bg-white">
        <div className="card-body border">
          <img src= {props.Item.imgsrc } className="w-100" />
        </div>
        <div className="card-footer border-0 bg-white text-center">
          <h5>{props.Item.name}</h5>
          <div className="rating-container">
            <Stars
              stars={props.Item.rating}
              outOf={5}
              full={"#72ce35"}
              empty={"white"}
              stroke={"#ccc"}
            />
          </div>
          <h5>₹{props.Item.price}</h5>
          <h6><i class="fa fa-phone-square mr-2"></i>+09123 456 789</h6>
        </div>
      </div>
    </div>
  );
}
