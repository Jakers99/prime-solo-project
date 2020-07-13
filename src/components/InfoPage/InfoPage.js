import React, { Component } from 'react';
import { connect } from 'react-redux';
class TeamJoin extends Component {

  render(){
    return(
      <div>
        <h1>Team Schedule</h1>
        <ul>
          <li>
            <p><u>Game 1</u></p>
            <div><b>Opponent:</b> Team Dahl</div>
            <div><b>Date:</b> 2020-07-15</div>
            <div><b>Time:</b> 20:00</div>
            <div><b>Arena:</b> Vadnais Sports Center</div>
            <div><b>Jersey Color:</b> home</div>
          </li>

        </ul>
      </div>
    )
  }
}



export default TeamJoin;
