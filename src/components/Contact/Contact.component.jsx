import React,{ useState } from 'react'
import ContactCard from './ContactCard.component';
import ContactInfo from './ContactInfo.component';

export default function Contact() {
    const [heading1,setheading1] = useState({name:"SHOPPING GUIDE",content:["Blog","FAQs","Payment","Shipment","Return Policy"]});
    const [heading2,setheading2] = useState({name:"INFORMATION",content:["Site Map","Search Terms","Advanced Search","About Us","Suppliers"]});
    const [contactInfo1,setContactInfo1]= useState({fa:"fa-map-marker",data:"KlbTheme, 789 Main rd, Anytown, CA 12345 USA"});
    const [contactInfo2,setContactInfo2]= useState({fa:"fa-phone",data:"+ 888 456-7890"});
    const [contactInfo3,setContactInfo3]= useState({fa:"fa-envelope",data:"grrenmarket@gmail.com"});
    
    
    return (
        <div className="container-fluid bg-dark mt-4">
        <div className="container">
            <div className="row">
                <ContactCard heading={heading1}/>
                <ContactCard heading={heading2}/>
                <div className="col-md-4 mb-3 p-4">
                    <h4 style={{color: '#95D850',fontFamily:'Kalam'}}>CONTACT US</h4>
                    <div className="mt-3">
                        <ContactInfo contactInfo={contactInfo1}/>
                        <ContactInfo contactInfo={contactInfo2}/>
                        <ContactInfo contactInfo={contactInfo3}/>
                    </div>
                </div>
            </div>
           <hr/>
            <div className="row pb-3">
                <div className="col-12 d-flex justify-content-center">
                    <a href="#" className="text-light rounded d-flex justify-content-center align-items-center" style={{width: "40px",height:"40px",backgroundColor:"#3C5B9B"}}><i className="fa fa-facebook"></i></a>
                    <a href="#" className="text-light rounded d-flex justify-content-center align-items-center ml-2" style={{width: "40px",height:"40px",backgroundColor:"#359BED"}}><i className="fa fa-twitter"></i></a>
                    <a href="#" className="text-light rounded d-flex justify-content-center align-items-center ml-2" style={{width: "40px",height:"40px",backgroundColor:"#E33729"}}><i className="fa fa-google-plus"></i></a>
                    <a href="#" className="text-light rounded d-flex justify-content-center align-items-center ml-2" style={{width: "40px",height:"40px",backgroundColor:"#027BA5"}}><i className="fa fa-linkedin"></i></a>
                    <a href="#" className="text-light rounded d-flex justify-content-center align-items-center ml-2" style={{width: "40px",height:"40px",backgroundColor:"#F03434"}}><i className="fa fa-youtube"></i></a>
                </div>
            </div>
    </div>
    </div>
    )
}
