const initialState = {
    user: [], //se llama en mapStateToProps 
    oneUser:{}
}

const authReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'user':
            return {
                ...state,
                user: action.payload
            }
        case 'oneUser':
            return {
                ...state,
                oneUser: action.payload
            }
        default:
            return state
    }
}
export default authReducer