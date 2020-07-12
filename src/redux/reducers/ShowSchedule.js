const TeamSchedule = (state = [], action) => {
    if (action.type === 'SET_SCHEDULE') {
        console.log('Inside ShowSchedule', action.payload);
        return action.payload;
    }
    return state;
}


export default TeamSchedule;