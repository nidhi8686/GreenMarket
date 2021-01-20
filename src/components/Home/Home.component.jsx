import React from 'react'
import './Home.css'
import About from './About.component'
import Services from './Services.component'
import Product from '../Product.component'
import Contact from '../Contact/Contact.component'

export default function Home() {
    return (
        <div>
            <div className="header"></div>
            <About/>
            <Services/>
            <Product/>
            <Contact/>
        </div>
    )
}
