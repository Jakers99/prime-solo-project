import React, { Component } from 'react';
import { connect } from 'react-redux';
class TeamSchedule extends Component {
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_SCHEDULE'
        })
        
    }
    linkToCreate = () => {
        this.props.history.push('/CreateSchedule')
    }
        render() {
        return(
            <div>
            <h1>Team Schedule</h1>
                <ul>
                    
                        {this.props.reduxStore.TeamSchedule.map(item => (
                            <li>
                                <div><b>Opponent: </b>{item.opponentsTeam}</div>
                                <div><b>Date: </b>{item.date} </div>
                                <div><b>Time: </b>{item.time} </div>
                                <div><b>Arena: </b>{item.arena} </div>
                                <div><b>Jersey Color: </b>{item.jersey}</div>
                                <p></p>
                                </li>
                        ))}
                    <button className='log-in' onClick={this.linkToCreate}>Add a Game</button>
                    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(TeamSchedule);