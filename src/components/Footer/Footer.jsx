import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
     <div className="top">
        <div className="item">
          <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Children</span>
            <span>Accessories</span>
        </div>
        <div className="item">
          <h1>Links</h1>
            <span>FAQ</span>
            <span>Locations</span>
            <span>Returns</span>
            <span>Careers</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.</p>
        </div>
        <div className="item">
          <h1>Contact Us</h1>
          <div className='contact'>
          Name : <input type="text" /> 
          Email : <input type="email" />
          Message: <input type="text"/>
          </div>
        </div>
     </div>
     <div className="bottom">
        <div className="left">
          <span className='logo'>TSE store</span>
          <span className='copyright'> 
          Copyright 2023. All Rights Reserved 
          </span>
        </div>
        <div className="right">
       <img src='/img/payment.png' alt="" />
        </div>
      </div>  
    </div>
  )
}

export default Footer