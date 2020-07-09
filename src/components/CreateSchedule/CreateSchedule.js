import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateSchedule extends Component {
    //figure out a way to have the users team as a default for the dom
    state = {
        opponentsName: '',
        arena: '',
        date: '',
        time: '',
        jerseyColor: ''
    }
    registerSchedule = () => {
        console.log('register that schedule');
        
    }
    handleInputChangeFor = propertyName => (event) => {
        console.log('event.target.value', event.target.value);

        this.setState({
            [propertyName]: event.target.value,
        });
    }
    render(){
        return(
            <div>
                <form onSubmit= {this.registerSchedule}>
                    <h1>Create Schedule</h1>
                        <div>
                            <label htmlFor='opponentName'>
                            Opponents Team Name:
                                <input
                                type='text'
                                name='opponentName'
                                value = {this.state.opponentsName}
                                onChange={this.handleInputChangeFor('opponentsName')}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor='arena'>
                            Arena Name:
                                <input
                                type='text'
                                name='arena'
                                value= {this.state.arena}
                                onChange={this.handleInputChangeFor('arena')}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor= 'date'>
                            Date:
                                <input 
                                    type="date" 
                                    name="date"
                                    value={this.state.date}
                                    min="2020-01-01" 
                                    max="2022-12-31"
                                    onChange={this.handleInputChangeFor('date')}
                                    />
                            </label>
                        </div>
                        <div>
                            <label htmlFor= 'time'>
                            Time:
                                <input
                                    type= 'time'
                                    name= 'time'
                                    value= {this.state.time}
                                    onChange={this.handleInputChangeFor('time')}
                                    />
                            </label>
                        </div>
                        <div>
                            <h3>Jersey To Wear:</h3>
                                <label htmlFor= 'home'>
                                Home:
                                    <input
                                        type= 'radio'
                                        name= 'jerseys'
                                        id= 'home'
                                        value= 'home'
                                        onChange={this.handleInputChangeFor('jerseyColor')}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor='away'>
                                Away:
                                    <input
                                        type='radio'
                                        name='jerseys'
                                        id='away'
                                        value='away'
                                        onChange={this.handleInputChangeFor('jerseyColor')}
                                    />
                                </label>
                        </div>
                        
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    errors: state.errors,
});
export default connect(mapStateToProps)(CreateSchedule);