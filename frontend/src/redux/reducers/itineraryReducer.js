const initialState = {
    itineraries: [], //se llama en mapStateToProps 
    auxItineraries: [],
    itineraryByCity: []
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
        case 'itinerayCity':
            return {
                ...state,
                itineraryByCity: action.payload
            }
        default:
            return state 
  
    }
    // return state
}
export default itineraryReducer