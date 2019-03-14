import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.css";
import logo from './images/logo4.png'


class Header extends Component {
  render() {
    return (
    // <div className="dt w-100 border-box pa3 ph5-ns">
    //     <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
    //       <img src={logo} className="dib w2 h2 w-25" alt="logo"/>
    //     </a>
    //     <div className="dtc v-mid w-75 tr">
    //       <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Services</a>
    //       <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Blog</a>
    //       <a className="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Join Us</a>
    //     </div>
    // </div>  

    <div class="header cover bg-left bg-center-l" >
        <div class="bg-black-20 pb5 pb6-m pb7-l">
        <nav class="dt  mw8 center"> 
    
        <div className="w-100 dtc v-mid tr pa3">
        <Link className="f3 fw5 hover-blue no-underline white-70 dn dib-l pv2 ph3" to="/home">Home</Link> 
        <Link className="f3 fw5 hover-red no-underline white-70 dn dib-l pv2 ph3" to="/about">About</Link> 
        <Link className="f3 fw5 hover-blue no-underline white-70 dn dib-l pv2 ph3" to="/contact">Contact</Link>
        <Link className="f3 fw5 hover-red no-underline white-70 dn dib-l pv2 ph3" to="/signup">Sign Up</Link>
        <Link className="f3 fw hover-blue no-underline white-70 dib ml2 pv2 ph3 ba" to="/login">Login</Link >
        </div>
    </nav> 
    <div className="tc-l mt4 mt5-m mt6-l ph3">
        <h1 className="f4 f1-l fw2 white-90 mb0 lh-title">Jump Shot Buddy</h1>
        <h2 className="fw3 f3 white-80 mt3 mb4">Master Your Stroke.</h2>
    </div>
</div>
</div> 
    );
  }
}

export default Header;