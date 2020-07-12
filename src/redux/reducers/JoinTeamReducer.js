const JoinTeamReducer = (state = [], action) => {
    if (action.type === 'SET_TEAMS'){
        console.log('Inside JoinTeamReducer', action.payload);
        return action.payload;
    }
    return state;
}


export default JoinTeamReducer;