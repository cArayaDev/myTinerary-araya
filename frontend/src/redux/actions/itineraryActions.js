import axios from 'axios'

const itineraryActions = {
    getItineraries: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/itineraries')
            dispatch({type:'fetchItineraio', payload:res.data.response})
        }
    }
}
export default itineraryActions