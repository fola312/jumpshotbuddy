import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Basketallc from './images/basketball.jpg';
import { Button } from 'mdbreact';
import Ballicon from './images/ball.jpg';
import "./App.css";


class Court extends Component {
  render() {
    return (
    <MDBContainer fluid >
        <MDBRow className='tc'>
            <MDBCol>
              <h1>happy Shooting! :)</h1> 
              <Button color="primary" rounded>Hit it!</Button> 
            </MDBCol>
        </MDBRow>
        <MDBRow></MDBRow>
        <MDBRow></MDBRow>
        <MDBRow></MDBRow>
        <MDBRow></MDBRow>
        <MDBRow></MDBRow>
        <MDBRow></MDBRow>
        <MDBRow></MDBRow>
        <MDBRow>
            <MDBCol>
              <img src= {Ballicon} alt='ball icon' className='ballicons'></img>  
            </MDBCol>
            <MDBCol></MDBCol>
            <MDBCol className='order-last'>
              <img src= {Ballicon} alt='ball icon' className='ballicons'></img>  
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
              <img src= {Ballicon} alt='ball icon' className='ballicons'></img>  
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
              <img src= {Ballicon} alt='ball icon' className='ballicons'></img>  
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
              <img src= {Ballicon} alt='ball icon' className='ballicons'></img>  
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
              <img src= {Ballicon} alt='ball icon' className='ballicons'></img>  
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
              <img src= {Ballicon} alt='ball icon' className='ballicons'></img>  
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
              <img src= {Ballicon} alt='ball icon' className='ballicons'></img>  
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
              <img src= {Ballicon} alt='ball icon' className='ballicons'></img>  
            </MDBCol>
        </MDBRow>
                <div className='tc '>
            
                
                <img src= {Ballicon} alt='ball icon' className='ballicons'></img>
                <img src= {Ballicon} alt='ball icon' className='ballicons'></img>
                <img src= {Ballicon} alt='ball icon' className='ballicons'></img>
                <img src= {Ballicon} alt='ball icon' className='ballicons'></img>
                <img src= {Ballicon} alt='ball icon' className='ballicons'></img>
                <img src= {Ballicon} alt='ball icon' className='ballicons'></img>
                <img src= {Ballicon} alt='ball icon' className='ballicons'></img>
                <h1>balls</h1>
      </div>
          </MDBContainer>
                   /* <img src={Basketallc} alt='basketballcourt' className='w-80'></img> */
    );
  }
}

export default Court;