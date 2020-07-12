import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createSchedule(action) {
    try {
        console.log('action.payload:', action.payload);
        yield axios.post('api/user/schedule', action.payload);
        // yield put({type: 'POST_TEAM', payload: action.payload})
    } catch (error) {
        console.log('Error with user registration:', error);
        yield put({ type: 'REGISTRATION_FAILED' });
    }
}



function* addEvent() {
    yield takeLatest('CREATE_SCHEDULE', createSchedule);
}

export default addEvent;
