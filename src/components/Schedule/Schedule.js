import React, { Component } from 'react';
import { connect } from 'react-redux';
class TeamSchedule extends Component {
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_SCHEDULE'
        })
        
    }
    
        render() {
        return(
            <div>
            <h1>Team Schedule</h1>
                <ul>
                    
                        {this.props.reduxStore.TeamSchedule.map(item => (
                            <li>{item.opponentsTeam}</li>
                        ))}
                    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(TeamSchedule);