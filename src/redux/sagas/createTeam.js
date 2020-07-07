import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerTeam(action) {
    try {
        // clear any existing error on the registration page
        // yield put({ type: 'CLEAR_REGISTRATION_ERROR' });
        console.log('in the try', action.payload);
        // passes the username and password from the payload to the server
        yield axios.post('/api/user/CreateTeam',  {name: action.payload});
        
        
        // automatically log a user in after registration
        // yield put({ type: 'LOGIN', payload: action.payload });

        // set to 'login' mode so they see the login screen
        // after registration or after they log out
        // yield put({ type: 'SET_TO_CREATE_TEAM_MODE' });
    } catch (error) {
        console.log('Error with user registration:', error);
        // yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* teamRegister() {
    yield takeLatest('REGISTER_TEAM', registerTeam);
}

export default teamRegister;