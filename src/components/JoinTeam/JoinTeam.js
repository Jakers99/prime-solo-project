import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
class JoinTeam extends Component {
    componentDidMount(){
    this.props.dispatch({
        type: 'TEAM_GET'
    })
}
    teamButton = () => {
        console.log('clicked');
        this.props.history.push('/info')
    }
    render(){
        console.log('this.props', this.props.reduxStore);
        
        return(
            <div>
            <h1>Join a Team</h1>
            
            <ul>
                    {this.props.reduxStore.JoinTeamReducer.map(item => (
                        <div>
                        <p>{item.name}
                        <button onClick={this.teamButton}> Join Team </button>
                        
                        </p>
                        </div>
                        
                    ))}
            </ul>
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(JoinTeam);
