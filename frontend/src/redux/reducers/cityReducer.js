const initialState = {
    cities: [], //se llama en mapStateToProps 
    auxCities: [],
    oneCity: []
}

const cityReducer = (state = initialState, action) => {
    switch(action.type){
        case 'fetch':
              return {
                  ...state,            
                  cities: action.payload,
                  auxCities: action.payload
                }
                // console.log(cities)
        case 'filter':
              return {
                  ...state,
                  cities: action.payload
              }
        case 'oneCity':
            return {
                ...state,
                oneCity: action.payload
            }
        default:
              return state 
    }
    // return state
}
export default cityReducer