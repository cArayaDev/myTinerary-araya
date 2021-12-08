const initialState = {
    itineraries: [], //se llama en mapStateToProps 
    auxItineraries: [],
}

const itineraryReducer = (state = initialState, action) => {
    switch(action.type){
        case 'fetchItineraio':
            //  console.log('holiii',state)
            return {
                ...state,
                itineraries: action.payload,
                auxItineraries: action.payload
            }
        default:
            return state 
  
    }
    // return state
}
export default itineraryReducer