import React, { Component } from 'react';
import Basketallc from './images/basketball.png';


class Court extends Component {
  render() {
    return (
      <div className='tc'>
          <h1>Interactive basketball court</h1>
          <img src={Basketallc} alt='basketballcourt' className='w-80'></img>
      </div>
    );
  }
}

export default Court;