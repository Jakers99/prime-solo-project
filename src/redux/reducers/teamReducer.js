const teamReducer = (state = {}, action) => {
    console.log('does teamReducer even work?', state);
    switch (action.type) {
        case 'SET_TO_CREATE_TEAM_MODE':
            return action.payload;
        default:
            return state;
    } 
}
export default teamReducer;