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
    registerSchedule = (event) => {
        event.preventDefault();
        console.log('register that schedule!!');
        this.props.dispatch({
            type: 'CREATE_SCHEDULE',
            payload: {
                opponentsName: this.state.opponentsName,
                arena: this.state.arena,
                date: this.state.date,
                time: this.state.time,
                jerseyColor: this.state.jerseyColor
            }
        });
        // console.log('this is the payload', this.state);
    }
    handleInputChangeFor = propertyName => (event) => {
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
                            <label htmlFor='opponentsName'>
                            Opponents Team Name:
                                <input
                                type='text'
                                name='opponentsName'
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
                            <div>
                                <input
                                    className="register"
                                    type="submit"
                                    name="submit"
                                    value="Add Game"
                                />
                            </div>
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