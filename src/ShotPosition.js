
  import React from "react";
import { MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";



const ShotPosition = () => {
  return (
    <div className=''>   
    <MDBDropdown dropup>
        <MDBDropdownToggle caret color="info" className="h-100">
          Spot
        </MDBDropdownToggle>
        <MDBDropdownMenu basic color="info">
          <MDBDropdownItem>1</MDBDropdownItem>
          <MDBDropdownItem>2</MDBDropdownItem>
          <MDBDropdownItem>3</MDBDropdownItem>
          <MDBDropdownItem>4</MDBDropdownItem>
          <MDBDropdownItem>5</MDBDropdownItem>
          <MDBDropdownItem>6</MDBDropdownItem>
          <MDBDropdownItem>7</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
   </div>


// import React, { Fragment } from 'react';
// import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import { Button } from 'mdbreact';




// const ShotSelector = () =>{
//     return (
//         <div className='mt-5 tc'>
//                 <Fragment >
//                     <MDBDropdown  dropup className='tc' size="lg">
//                         <MDBDropdownToggle caret color="info">
//                         Shot Type
//                         </MDBDropdownToggle>
//                         <MDBDropdownMenu color="info" basic>
//                         <MDBDropdownItem>Set</MDBDropdownItem>
//                         <MDBDropdownItem>JumpShot</MDBDropdownItem>
//                         <MDBDropdownItem>Fade Away</MDBDropdownItem>
//                         <MDBDropdownItem>Fade Right</MDBDropdownItem>
//                         <MDBDropdownItem>Fade Left</MDBDropdownItem>
//                         <MDBDropdownItem>Tear Drop</MDBDropdownItem>
//                         </MDBDropdownMenu>
//                     </MDBDropdown>
//                     <MDBDropdown dropup className='tc' size="lg">
//                         <MDBDropdownToggle caret color="success">
//                         Court Position
//                         </MDBDropdownToggle>
//                         <MDBDropdownMenu color="success" basic>
//                         <MDBDropdownItem>1</MDBDropdownItem>
//                         <MDBDropdownItem>2</MDBDropdownItem>
//                         <MDBDropdownItem>3</MDBDropdownItem>
//                         <MDBDropdownItem>4</MDBDropdownItem>
//                         <MDBDropdownItem>5</MDBDropdownItem>
//                         <MDBDropdownItem>6</MDBDropdownItem>
//                         <MDBDropdownItem>7</MDBDropdownItem>
//                         <MDBDropdownItem>8</MDBDropdownItem>
//                         </MDBDropdownMenu>
//                         <MDBDropdown dropup className='tc' size="lg">
//                         <MDBDropdownToggle caret color="secondary">
//                         Shots Made
//                         </MDBDropdownToggle>
//                         <MDBDropdownMenu color="secondary" basic>
//                         <MDBDropdownItem>1</MDBDropdownItem>
//                         <MDBDropdownItem>2</MDBDropdownItem>
//                         <MDBDropdownItem>3</MDBDropdownItem>
//                         <MDBDropdownItem>4</MDBDropdownItem>
//                         <MDBDropdownItem>5</MDBDropdownItem>
//                         <MDBDropdownItem>6</MDBDropdownItem>
//                         <MDBDropdownItem>7</MDBDropdownItem>
//                         <MDBDropdownItem>8</MDBDropdownItem>
//                         <MDBDropdownItem>9</MDBDropdownItem>
//                         <MDBDropdownItem>10</MDBDropdownItem>
//                         <MDBDropdownItem>11</MDBDropdownItem>
//                         <MDBDropdownItem>12</MDBDropdownItem>
//                         <MDBDropdownItem>13</MDBDropdownItem>
//                         <MDBDropdownItem>14</MDBDropdownItem>
//                         <MDBDropdownItem>15</MDBDropdownItem>
//                         <MDBDropdownItem>16</MDBDropdownItem>
//                         <MDBDropdownItem>17</MDBDropdownItem>
//                         <MDBDropdownItem>18</MDBDropdownItem>
//                         <MDBDropdownItem>19</MDBDropdownItem>
//                         <MDBDropdownItem>20</MDBDropdownItem>
//                         </MDBDropdownMenu>
//                     </MDBDropdown>
//                     </MDBDropdown>
//                     <Button className='tc' color="danger" rounded>Submit</Button> 
//                 </Fragment>
//       </div>
//       );
//     }
 
  
//   export default ShotSelector;

  )
}

export default ShotPosition;