import axios from 'axios'


const authActions = {
    insertUser:(newUser) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.post('http://localhost:4000/api/users', {...newUser})
                if(res.data.success && !res.data.error){
                    dispatch({type:'user', payload:res.data.response})
                }else{
                    console.error(res.data.response) //response vienen los datos de errores de validator.js
                    return {errors: [{message: res.data.error}]}
                }
            }catch(error){
            }
        }
    },
    logIn:(user) => {
        return async(dispatch, getState) => {
            try {
                // console.log(user)
                const res = await axios.post('http://localhost:4000/api/sigin/', {...user})
                console.log(res)
                if(res.data.success && !res.data.error){
                    dispatch({type:'oneUser', payload:{data:res.data.response}})
                }else{
                  alert(res.data.error)
                }
                // console.log(res)
            }catch(error){
                console.error(error)
            }

        }
    }    
}
export default authActions