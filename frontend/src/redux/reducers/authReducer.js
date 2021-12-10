const initialState = {
    user: [] //se llama en mapStateToProps 
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'user':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
export default authReducer