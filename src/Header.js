import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.css";



class Header extends Component {
  render() {
    return (

    <div class="header cover bg-left bg-center-l" >
    <div class="bg-black-20 pb5 pb6-m pb7-l">
      <nav class="dt w-100 mw8 center"> 
        <div class="dtc w2 v-mid pa3">
          <a href="/" class="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
          <img src="" class="dibw2 h2 br-100" alt=""></img>
          </a>
    </div>
    <div className="dtc v-mid tr pa3">
    <Link className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" to="/home">Home</Link> 
    <Link className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" to="/about">About</Link> 
    <Link className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" to="/contact">Contact</Link>
    <Link className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" to="/signup">Sign Up</Link>
    <Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" to="/login">Login</Link >
    </div>
  </nav> 
  <div className="tc-l mt4 mt5-m mt6-l ph3">
    <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Jump Shot Buddy</h1>
    <h2 className="fw1 f3 white-80 mt3 mb4">Master Your Stroke</h2>
  </div>
</div>
</div> 
    );
  }
}

export default Header;