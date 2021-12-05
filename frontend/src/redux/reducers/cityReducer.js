const initialState = {
    cities: [], //se llama en mapStateToProps 
    auxCities: []
}

const cityReducer = (state = initialState, action) => {
    switch(action.type){
        case 'fetch':
              return {
                  cities: action.payload,
                  auxCities: action.payload
                }
                // console.log(cities)
        case 'filter':
              return {
                  ...state,
                  cities: action.payload
              }
        default:
              return state 
    }
    // return state
}
export default cityReducer