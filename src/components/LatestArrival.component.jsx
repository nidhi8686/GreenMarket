import React from 'react'

export default function LatestArrival(props) {
    return (
        <div>
            <div className="row">
          <div className="col-12 text-center mt-4">
            <h4 style={{ color: "#95D850", fontFamily: "Kalam" }}>
              Latest Arrivals
            </h4>
            <h1
              className="font-weight-bold"
              style={{ fontFamily: "Righteous" }}
            >
              {props.heading}
            </h1>
          </div>
        </div>
        </div>
    )
}
