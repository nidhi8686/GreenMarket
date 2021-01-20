import React,{ useState } from "react";
import Item from "./Item.component";
import LatestArrival from "./LatestArrival.component";

export default function Product() {
    const [Item1,setItem1] =useState({imgsrc:"https://www.vippng.com/png/detail/71-714589_download-png-image-single-fruits-and-vegetables.png",name:"ORANGE",price:90,rating:4});
    const [Item2,setItem2] =useState({imgsrc:"https://livedemo00.template-help.com/wt_prod-21756/images/product-1-220x160.png",name:"BANANAS",price:60,rating:3});
    const [Item3,setItem3] =useState({imgsrc:"https://agrohemija.com.mk/wp-content/uploads/2018/05/karfiol.jpg",name:"GREEN CABBAGE",price:30,rating:5});
    const [Item4,setItem4] =useState({imgsrc:"https://www.lakesidepacking.com/wp-content/uploads/2014/07/Tomatoes1.jpg",name:"TOMATOES",price:60,rating:2});
    const [heading,setHeading] = useState("NEW PRODUCTS");
    return (
      <div className="container-fluid mb-4 pt-4">
        <LatestArrival heading={heading}/>
        <div className="container">
            <div className="row pt-4">
                <Item Item={Item1}/>
                <Item Item={Item2}/>
                <Item Item={Item3}/>
                <Item Item={Item4}/>
            </div>
        </div>
      </div>
  );
}
