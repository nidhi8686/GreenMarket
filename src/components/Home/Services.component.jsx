import React,{ useState } from "react";
import ServiceCard from './ServiceCard.component'

export default function Services() {
    const [Service1]= useState({name:"QUALITY PRODUCTS",content:"We work with the best suppliers to offer our customers the fresh grocery products of the highest quality"});
    const [Service2]= useState({name:"AFFORDABLE PRICES",content:"Thanks to our affordable pricing policy, our customers don’t have to overpay for the products they need."});
    const [Service3]= useState({name:"FAST SHIPPING",content:"Our store offers fast worldwide shipping to all customers regardless of what and how much you order."});
    const [Service4]= useState({name:"OPEN 24/7",content:"Unlike other grocery shops, we are ready to serve you 24/7 and offer the best selection of groceries."});
  return (
    <div className="bg-light">
      <div className="container-fluid">
        <div className="row pt-4">
          <div className="col-12 text-center mt-4">
            <h4 style={{color: '#95D850',fontFamily: 'Kalam'}}>
              Fresh fruit & vegitables supplied to the catering industry
            </h4>
            <h1
              className="font-weight-bold"
              style={{ fontFamily: 'Righteous'}}
            >
              SERVICE
            </h1>
          </div>
        </div>
         <div className="container">
          <div className="row">
              <ServiceCard Service={Service1}/>
              <ServiceCard Service={Service2}/>
              <ServiceCard Service={Service3}/>
              <ServiceCard Service={Service4}/>
          </div>
        </div> 
      </div>
    </div>
  );
}
