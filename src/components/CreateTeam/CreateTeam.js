import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTeam extends Component {
    state = {
        name: ''
    };
    registerTeam = (event) => {
        event.preventDefault();
            this.props.dispatch({
                type: 'REGISTER_TEAM',
                payload: this.state.name
            });
        // this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) 
        this.props.history.push('/home')
    }
        handleInputChangeFor = propertyName => (event) => {
            this.setState({
                [propertyName]: event.target.value,
            });
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
                                    // onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
                                />
                                <div>
                                    <button
                                        type="button"
                                        className="link-button"
                                        onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
                                    >
                                        Login
                                    </button>
                                </div>
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