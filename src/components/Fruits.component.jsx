import React,{ useState } from 'react'
import LatestArrival from './LatestArrival.component'
import Item from './Item.component'
import Contact from './Contact/Contact.component'

export default function About() {
    const [Item1,setItem1] =useState({imgsrc:"https://www.vippng.com/png/detail/71-714589_download-png-image-single-fruits-and-vegetables.png",name:"ORANGE",price:90,rating:4});
    const [Item2,setItem2] =useState({imgsrc:"https://livedemo00.template-help.com/wt_prod-21756/images/product-1-220x160.png",name:"BANANAS",price:60,rating:3});
    const [Item3,setItem3] =useState({imgsrc:"https://previews.123rf.com/images/usersam2007/usersam20071708/usersam2007170800015/83975963-single-ripe-red-apple-fruit-with-green-leaf-isolated-on-white-background-with-clipping-path.jpg",name:"APPLE",price:90,rating:5});
    const [Item4,setItem4] =useState({imgsrc:"https://cdn.shopify.com/s/files/1/0612/5981/products/watermelon_05280ded-606f-46cc-9b92-0953c30b5491_large.JPG?v=1415213190",name:"WATERMELON",price:60,rating:3});
    
    const [Item5,setItem5] =useState({imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPSiTU2FXEfztII1kL-Zo9YY_YgeyTVYTehA&usqp=CAU",name:"BLUE GRAPES",price:120,rating:2});
    const [Item6,setItem6] =useState({imgsrc:"https://venkatmails.com/wp-content/uploads/2013/05/POMEGRANATE-A-NATURAL-PHARMACY-IN-A-SINGLE-FRUIT.jpg",name:"POMEGRANATE",price:100,rating:4});
    const [Item7,setItem7] =useState({imgsrc:"https://previews.123rf.com/images/boonchuay/boonchuay1708/boonchuay170800021/83278009-single-fresh-guava-fruit-with-green-leaf-isolated-on-white-background.jpg",name:"GUAVA",price:190,rating:5});
    const [Item8,setItem8] =useState({imgsrc:"https://agrohemija.com.mk/wp-content/uploads/2018/05/karfiol.jpg",name:"GREEN CABBAGE",price:30,rating:1});
    const [heading,setHeading] = useState("FRUITS");
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
