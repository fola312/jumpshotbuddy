import React, { Component }  from "react";
import {MDBBtnGroup} from "mdbreact"
import ShotType from './ShotType';
import ShotsMade from "./ShotsMade";
import ShotPosition from "./ShotPosition";


var sam = 5;
var dice = 7;

var stat = ((sam * dice) + '%')


class StatTracker extends Component {
    render() {


      return (
      <div class="tc" >
        <MDBBtnGroup>
          <ShotPosition />
          <ShotType />
          <ShotsMade />
        </MDBBtnGroup>

        <h1>{stat}</h1>
        <h1> Overall Stats FG% FT% TS%</h1>
      </div> 
      );
    }
  }
  
  export default StatTracker;