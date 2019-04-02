import React, { Component } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class ShotType extends Component {
  render() {
    return (
        <MDBDropdown tc >
        <MDBDropdownToggle caret color="info" className="">
          Shot Type 2
        </MDBDropdownToggle>
        <MDBDropdownMenu basic color="info">
          <MDBDropdownItem>Set Shot</MDBDropdownItem>
          <MDBDropdownItem>Jumpshot</MDBDropdownItem>
          <MDBDropdownItem>Fade Away</MDBDropdownItem>
          <MDBDropdownItem>Fade Left</MDBDropdownItem>
          <MDBDropdownItem>Fade Right</MDBDropdownItem>
          <MDBDropdownItem>Floater</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
}

export default ShotType;