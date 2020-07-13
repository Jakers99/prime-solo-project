const TeamSchedule = (state = [], action) => {
    if (action.type === 'SET_SCHEDULE') {
        console.log('Inside ShowSchedule', action.payload);
        return action.payload;
    }
    // else if (action.type === 'SCHEDULE_UNSELECT') {
    //     console.log('Inside the JOINTEAM reducer', state);
    //     return action.payload;
    // }
    return state;
}


export default TeamSchedule;