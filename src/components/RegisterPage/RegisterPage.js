import React, { Component } from 'react';
import {connect} from 'react-redux';
class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    team: '',
    captain: true
  };
  
  registerUser = (event) => {
    event.preventDefault();
    console.log('in registerUser', this.state)
    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: { 
        username: this.state.username,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        team: this.state.team,
        captain: this.state.captain
        }
        
      });
    } else {
      this.props.dispatch({type: 'TEAM_REGISTRATION_INPUT_ERROR'});
    }
    // this.props.history.push('/about')
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    console.log('event.target.value', event.target.value);
    
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  // registerTeam = (event) => {
  //   event.preventDefault();
  //   this.props.dispatch({
  //     type: 'REGISTER_TEAM',
  //     payload: this.state.team
  //   });
    // this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) 
    // this.props.history.push('/RegisterPage')
  
  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="first_name">
              First Name:
              <input
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChangeFor('first_name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="last_name">
              Last Name:
              <input
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChangeFor('last_name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <div>
              Would you like to create a team? 
            </div>
            <label htmlFor="captain">Yes</label>
            <input
            type='checkbox'
            name='captain'
            value= {this.state.captain}
            />
            {/* <label htmlFor="notCaptain">No</label>
            <input
              type='checkbox'
              name='notCaptain'
              // value={this.state.notCaptain}
            /> */}
          </div>
          <label htmlFor='team'>
            Team Name:
            <input
              type='text'
              name='team'
              value={this.state.team}
              onChange={this.handleInputChangeFor('team')}
            />
          </label>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

