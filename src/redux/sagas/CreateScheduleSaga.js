import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createSchedule(action) {
    try {
        // // clear any existing error on the registration page
        // yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

        // passes the username and password from the payload to the server
        console.log('action.payload:', action.payload);

        yield axios.post('/api/user/schedule', action.payload);

        // automatically log a user in after registration
        // yield put({ type: 'LOGIN', payload: action.payload });
        
        // const getSchedule= yield axios.get('/schedule');
        // yield put({type: 'TEAM_GET', payload: getSchedule.data})
    
            // yield axios.post('/api/user/CreateTeam', action.payload)
        
        // set to 'login' mode so they see the login screen
        // after registration or after they log out
        // yield put({ type: 'SET_TO_LOGIN_MODE' });
    } catch (error) {
        console.log('Error with user registration:', error);
        yield put({ type: 'REGISTRATION_FAILED' });
    }
}



function* addEvent() {
    yield takeLatest('CREATE_SCHEDULE', createSchedule);
}

export default addEvent;
