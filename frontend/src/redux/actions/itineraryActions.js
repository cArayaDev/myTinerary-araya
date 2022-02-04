import axios from 'axios'

const itineraryActions = {
    getItineraries: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://mytinerary-coquimbo.herokuapp.com/api/itineraries')
            // console.log(res.data.response)
            dispatch({type:'fetchItineraio', payload:res.data.response})
        }
    },
    itineraryByCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://mytinerary-coquimbo.herokuapp.com/api/itinerary/'+id)
            // console.log(res)
            dispatch({type:'itinerayCity', payload:res.data.response})
        }
    },
    filterItineraries: (cities, value) => {
        return (dispatch, getState) => {
           // console.log(cities, value)
            const filterCities = cities.filter((city => city.name.toLowerCase().startsWith(value.trim().toLowerCase())))
            dispatch({type:'filter', payload: filterCities})
        }
    },
    changeLikes:(idItineray) => {
        //  console.log(id_itinerary)
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.put('https://mytinerary-coquimbo.herokuapp.com/api/changeLikes', {idItineray}, {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
                // console.log('res', res)
                dispatch({type:'likes', payload:res.data.response.itinerary.likes})
                return res
            }catch(err){

            }
        }
    }      
}
export default itineraryActions