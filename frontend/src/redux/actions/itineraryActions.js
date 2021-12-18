import axios from 'axios'

const itineraryActions = {
    getItineraries: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/itineraries')
            // console.log(res.data.response)
            dispatch({type:'fetchItineraio', payload:res.data.response})
        }
    },
    filterItineraries: (cities, value) => {
        return (dispatch, getState) => {
           // console.log(cities, value)
            const filterCities = cities.filter((city => city.name.toLowerCase().startsWith(value.trim().toLowerCase())))
            dispatch({type:'filter', payload: filterCities})
        }
    },
    changeLikes:(id_itinerary) => {
        // console.log(id_itinerary)
        return async(dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.post('http://localhost:4000/api/changeLikes/', {id_itinerary}, {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
            }catch(err){

            }
        }
    }      
}
export default itineraryActions