import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import bcourt from './images/CourtBall.jpg'

class Court extends Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow className="mb-4">
          <MDBCol md="12">
            <img src={bcourt} className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Court;