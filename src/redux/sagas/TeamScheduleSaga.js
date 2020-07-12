import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getShedule(action) {
    try {
        const teamElement = yield axios.get('/api/user/teamSchedule')
        console.log(teamElement);
        yield put({ type: 'SET_SCHEDULE', payload: teamElement.data })
    } catch (error) {
        console.log('FAILED GET:', error);
    }
}

function* teamShedule() {
    yield takeEvery('GET_SCHEDULE', getShedule)
}
export default teamShedule;