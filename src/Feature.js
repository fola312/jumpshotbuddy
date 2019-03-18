import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Player from './images/shootingb.jpg';

const FeaturesPage = () => {
  return (
    <section className="my-6 rgba-white-light mb-5 mt-0">
      <div className=" pt-0 mt-0 my-0">
        <h2 className="h1-responsive font-weight-bold text-center my-3">
          Hi, my Name is Fola. And my jump-shot sucks. 
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          This is just a little webapp to help my friends and I track and improve our shooting in the glorious game of 
          basketall. Track shot-types, locations, FG% (field goal), and TS% ("true shooting").
        </p>
      </div>
      <MDBRow>
          <MDBCol md="6">
          <MDBRow>ffff </MDBRow>
          <MDBRow>ffff </MDBRow>
          <MDBRow>ffff </MDBRow>
          <MDBRow>ffff </MDBRow>
            <MDBRow className="mb-3 tc">
              <MDBCol size="4">
                <MDBIcon
                  icon="check"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="6">
                <h5 className="font-weight-bold mb-3">International</h5>
                <p className="grey-text">
                  Bullet 2 ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 tc">
              <MDBCol size="4">
                <MDBIcon icon="check" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="6">
                <h5 className="font-weight-bold mb-3">Experimental</h5>
                <p className="grey-text">
                  Bullet 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 tc">
              <MDBCol size="4">
                <MDBIcon icon="check" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="6">
                <h5 className="font-weight-bold mb-3">Relaxing</h5>
                <p className="grey-text">
                  Bullet 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 tc">
              <MDBCol size="4">
                <MDBIcon icon="check" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="6">
                <h5 className="font-weight-bold mb-3">Rapid</h5>
                <p className="grey-text">
                true shooting percentage is an APBRmetrics statistic that measures a player's efficiency 
                at shooting the ball. It is intended to more accurately calculate a player's shooting 
                than field goal percentage, free throw percentage, and three-point field goal percentage 
                taken individually
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 tc">
              <MDBCol size="4">
                <MDBIcon icon="basketball-ball" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="6">
                <h5 className="font-weight-bold mb-3">Magical</h5>
                <p className="grey-text">
                  Become the "TRUE HOOPER" no one ever thought you could be, because they dare not to dream.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="6" className="text-center">
            <img
              className="img-fluid rounded-circle tc"
              src={Player}
              alt=""
            />
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesPage;
// Introduction
// Version 1
// Version 2
// Version 3
// Version 4
