import React, { Component } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


class ShotsMade extends Component {
    render() {
      return (
      <MDBDropdown dropup>
        <MDBDropdownToggle caret color="danger" className="">
          Shots Made
        </MDBDropdownToggle>
        <MDBDropdownMenu basic color="info">
          <MDBDropdownItem>1</MDBDropdownItem>
          <MDBDropdownItem>2</MDBDropdownItem>
          <MDBDropdownItem>3</MDBDropdownItem>
          <MDBDropdownItem active >4</MDBDropdownItem>
          <MDBDropdownItem>5</MDBDropdownItem>
          <MDBDropdownItem>7</MDBDropdownItem>
          <MDBDropdownItem>9</MDBDropdownItem>
          <MDBDropdownItem>10</MDBDropdownItem>
          <MDBDropdownItem>11</MDBDropdownItem>
          <MDBDropdownItem>12</MDBDropdownItem>
          <MDBDropdownItem>15</MDBDropdownItem>
          <MDBDropdownItem>16</MDBDropdownItem>
          <MDBDropdownItem>17</MDBDropdownItem>
          <MDBDropdownItem>20</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      );
    }
  }

  export default  ShotsMade;




