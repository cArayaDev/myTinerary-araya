import axios from 'axios'


const authActions = {
    insertUser:(newUser) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.post('http://localhost:4000/api/users', {...newUser})
                if(res.data.success && !res.data.error){
                    localStorage.setItem('token', res.data.response.token)
                    dispatch({type:'user', payload:res.data.response})
                }else{
                     console.error(res.data.response) //response vienen los datos de errores de validator.js
                    return { errors: [{message: res.data.error}] }
                }
            }catch(error){
                // console.error(error)
            }
        }
    },
    logIn:(user) => {
        return async(dispatch, getState) => {
            try {
                // console.log(user)
                const token = localStorage.getItem('token')
                const res = await axios.post('http://localhost:4000/api/sigin/', {...user},{
                    headers: {
                        'Authorization':`Bearer ${token}`
                    }
                })
                //    console.log(res)
                if(res.data.success && !res.data.error){
                    localStorage.setItem('token', res.data.response.token)
                    dispatch({type:'oneUser', payload:res.data.response})
                }else{
                //  console.log(res.data.error)
                  return {errors: [{message: res.data.error}]}
                }
                // console.log(res)
            }catch(error){
                console.error(error)
            }
        }
    },
    logout:() => {
        return async(dispatch, getState) => {
        localStorage.removeItem('token')
        dispatch({type:'logout'})
        }
    },
    logInPersistent:(token) => {
        return async(dispatch, getState) => {
            try {
                // console.log(user)
                const token = localStorage.getItem('token')
                const res = await axios.post('http://localhost:4000/api/siginPersistent/', {},{
                    headers: {
                        'Authorization':`Bearer ${token}`
                    }
                })
                    // console.log(res)
                    dispatch({type:'oneUser', payload:{name: res.data.name, imagen: res.data.urlphoto}})
                // console.log(res)
            }catch(error){
                console.error(error)
                return dispatch({type: 'logout'})
            }

        }
    }      
}
export default authActions