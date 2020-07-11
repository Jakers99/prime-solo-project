const JoinTeamReducer = (state = {}, action) => {
    if (action.type === 'TEAM_GET'){
        console.log('Inside JoinTeamReducer', action.payload);
        return action.payload;
    }
    return state;
}


export default JoinTeamReducer;