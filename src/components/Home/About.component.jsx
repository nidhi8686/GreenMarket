import React from 'react'

export default function About() {
    return (
        <div>
            <div className="container-fluid mb-4">
                <div className="row">
                    <div className="col-md-6 text-center"><img src={process.env.PUBLIC_URL+"/images/about-img.jpg"} className="w-75"/></div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-4">
                        <h4 style={{ fontFamily:'Kalam',color: '#95D850'}}>A Few Words About Our Store</h4>
                        <h1 className="font-weight-bold"  style={{ fontFamily: 'Righteous'}}>ABOUT US</h1>
                        <p  style={{ fontFamily:'sans-serif',letterSpacing:'1.2px'}}>Grocmart is a family-owned grocery store that
                            has been offering quality products for your everyday life since 1999, while also providing superior
                            service and competitive prices.</p>
                    </div>
        </div>
    </div>
        </div>
    )
}
