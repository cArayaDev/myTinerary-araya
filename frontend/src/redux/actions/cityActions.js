import axios from 'axios'

const cityActions = {
    getCities: () =>{
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/cities')
            // console.log(res.data.response)
            dispatch({type:'fetch', payload:res.data.response})
        }
    },
    filterCities: (cities, value) => {
        return (dispatch, getState) => {
            console.log(cities, value)
            const filterCities = cities.filter((city => city.name.toLowerCase().startsWith(value.trim().toLowerCase())))
            dispatch({type:'filter', payload: filterCities})
        }
    }
}
export default cityActions