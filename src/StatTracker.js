import React, { Component }  from "react";
import {MDBBtnGroup} from "mdbreact"
import ShotType from './ShotType';
import ShotsMade from "./ShotsMade";
import ShotPosition from "./ShotPosition";


var sam = 5;
var dice = 7;

var stat = ((sam * dice) + '%')


class StatTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    var active = !this.state.active
    this.setState({
      active: active
    })
  }

    render() {
      var classname = this.state.active ? "active" : "normal"
      return (
      <div class="tc" >
        <MDBBtnGroup>
          <ShotPosition onClick={this.buttonClicked} className={classname} />
          <ShotType />
          <ShotsMade />
        </MDBBtnGroup>

        <h1>{stat}</h1>
        <h1>Overall Stats  </h1>
        <h2>FG = 42% FT = 79% TS = 48.6% </h2>
      </div> 
      );
    }
  }
  
  export default StatTracker;