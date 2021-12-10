import axios from 'axios'


const authActions = {
    insertUser:(newUser) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.post('http://localhost:4000/api/users', {...newUser})
                // console.log(res.data.response)
                dispatch({type:'user', payload:res.data.response})
            }catch(error){

            }
        }
    }    
}
export default authActions