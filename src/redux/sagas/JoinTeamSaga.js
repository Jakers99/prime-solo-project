import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getTeam(action){
try{
    const teamElement = yield axios.get('/api/user/team')
    console.log(teamElement);
    yield put ({ type: 'SET_TEAMS', payload: teamElement.data })
} catch(error) {
    console.log('FAILED GET:', error); 
    }
} 

function* joinTeam() {
    yield takeEvery('TEAM_GET', getTeam)
}
export default joinTeam;