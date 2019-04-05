import React, { Component } from 'react';
import {Link } from "react-router-dom";
import "./App.css";



class Header extends Component {
  render() {
    return (
    <div class="header cover bg-left bg-center-l" >
        <div class="bg-black-20 pb5 pb6-m pb7-l">
        <nav class="dt  mw8 center"> 
    
        <div className="w-100 dtc v-mid tr pa3">
        <Link className="f3 fw5 hover-red no-underline white-70 dn dib-l pv2 ph3" to="/home">Home</Link> 
        <Link className="f3 fw5 hover-red no-underline white-70 dn dib-l pv2 ph3" to="/about">About</Link> 
        <Link className="f3 fw5 hover-red no-underline white-70 dn dib-l pv2 ph3" to="/contact">Contact</Link>
        <Link className="f3 fw5 hover-red no-underline white-70 dn dib-l pv2 ph3" to="/signup">Sign Up</Link>
        <Link className="f2 fw5 hover-blue no-underline red-70 dib ml2 pv2 ph3 ba" to="/login">Login</Link >
        </div>
    </nav> 
    <div className="tc-l mt4 mt5-m mt6-l ph3">
        <h1 className="f4 f2-l fw4 white-90 mb0 lh-title">Jump Shot Buddy</h1>
        <h2 className="fw3 f3 white-80 mt3 mb4">Master Your Stroke.</h2>
    </div>
</div>
</div> 
    );
  }
}

export default Header;