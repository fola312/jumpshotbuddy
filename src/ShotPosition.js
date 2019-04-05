import React, { Component } from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


class ShotPosition extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

   render() {
    return (
      <div className=''>   
        <MDBDropdown dropup>
            <MDBDropdownToggle caret color="info" className="">
              Spot
            </MDBDropdownToggle>
            <MDBDropdownMenu basic color="info">
              <MDBDropdownItem onClick={() => {
                this.setState((state) => ({
                  isActive: !state.isActive
                }))
              }}
              active={this.state.isActive} >
               1
              </MDBDropdownItem>
              <MDBDropdownItem>2</MDBDropdownItem>
              <MDBDropdownItem>3</MDBDropdownItem>
              <MDBDropdownItem>4</MDBDropdownItem>
              <MDBDropdownItem>5</MDBDropdownItem>
              <MDBDropdownItem>6</MDBDropdownItem>
              <MDBDropdownItem>7</MDBDropdownItem>
              <MDBDropdownItem>ALL</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
   </div>
    )
    }
  }


export default ShotPosition;
