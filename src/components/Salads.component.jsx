import React,{ useState } from 'react'
import LatestArrival from './LatestArrival.component'
import Item from './Item.component'
import Contact from './Contact/Contact.component'

export default function Salads() {
    const [Item1,setItem1] =useState({imgsrc:"https://livedemo00.template-help.com/wt_prod-21756/images/product-7-210x168.png",name:"SWEET PEPPERS",price:90,rating:4});
    const [Item2,setItem2] =useState({imgsrc:"https://livedemo00.template-help.com/wt_prod-21756/images/product-6-237x156.png",name:"CUCUMBERS",price:60,rating:3});
    const [Item3,setItem3] =useState({imgsrc:"https://previews.123rf.com/images/natika/natika1703/natika170301215/74915020-fresh-green-lettuce-salad-leaves-isolated-on-white-background.jpg",name:"KALE",price:90,rating:5});
    const [Item4,setItem4] =useState({imgsrc:"https://webstockreview.net/images/cabbage-clipart-single-vegetable-1.jpg",name:"CABBAGE",price:60,rating:3});
    
    const [Item5,setItem5] =useState({imgsrc:"https://www.lakesidepacking.com/wp-content/uploads/2014/07/Tomatoes1.jpg",name:"TOMATOES",price:120,rating:2});
    const [Item6,setItem6] =useState({imgsrc:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3074561.jpg",name:"GREEN CABBAGE",price:100,rating:4});
    const [Item7,setItem7] =useState({imgsrc:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/311343_2200-732x549.jpg",name:"BIT",price:190,rating:5});
    const [Item8,setItem8] =useState({imgsrc:"https://agrohemija.com.mk/wp-content/uploads/2018/05/karfiol.jpg",name:"GREEN CABBAGE",price:30,rating:1});
    const [heading,setHeading] = useState("SALADS");
    return (
        <div className="container-fluid p-0">
        <div className="container-fluid mb-4 pt-4">
            <LatestArrival heading={heading}/>
            <div className="container">
            <div className="row pt-4">
                <Item Item={Item1}/>
                <Item Item={Item2}/>
                <Item Item={Item5}/>
                <Item Item={Item4}/>
            </div>
            <div className="row pt-4">
                <Item Item={Item3}/>
                <Item Item={Item6}/>
                <Item Item={Item7}/>
                <Item Item={Item8}/>
            </div>
        </div>
        </div>
        <Contact/>
        </div>
    )
}