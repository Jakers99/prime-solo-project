import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTeam extends Component {
    state = {
        name: ''
    };
    registerTeam = (event) => {
        event.preventDefault();
        console.log('this.state.name', this.state.name);
            this.props.dispatch({
                type: 'REGISTER_TEAM',
                payload: this.state.name
            });
            // this.props.dispatch({ type: 'TEAM_REGISTRATION_INPUT_ERROR' });
        console.log('Is this thing on?', this.state.name);
        this.props.history.push('/about')
    }
        handleInputChangeFor = propertyName => (event) => {
            console.log('whats the propertyName again?', propertyName);
            
            this.setState({
                [propertyName]: event.target.value,
            });
            console.log('does the handleInputChangeFor even work?', event.target.value);
            
        }

        render() {
            return(
                <div>
                    <form onSubmit={this.registerTeam}>
                        <h1>Create Team Name:</h1>
                        <div>
                            <label htmlFor='name'>
                                Team Name:
                                <input
                                type='text'
                                name='name'
                                value={this.state.name}
                                onChange={this.handleInputChangeFor('name')}
                                />
                            </label>
                            <div>
                                <input
                                    className='register'
                                    type='submit'
                                    name='submitTeamName'
                                    value='Create Team'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
}
const mapStateToProps = state => ({
    errors: state.errors,
});
export default connect(mapStateToProps)(CreateTeam);