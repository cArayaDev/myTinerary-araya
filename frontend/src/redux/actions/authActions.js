import axios from 'axios'


const authActions = {
    insertUser:(newUser) => {
        return async(dispatch, getState) => {
            // console.log(newUser)
            try {
                const res = await axios.post('http://localhost:4000/api/users', {...newUser})// --> userController --> insertOneUser
                  console.log(res.data.error) //response vienen los datos de errores de validator.js
                if(res.data.success && !res.data.error){
                    localStorage.setItem('token', res.data.response.token)
                    dispatch({type:'user', payload:res.data.response})
                }else{
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
                const res = await axios.post('http://localhost:4000/api/sigin/', {...user})// va a --> usersControllers --> accessUser
                console.log('res desde el controller',res.data.response.token)
              
                if(res.data.success && !res.data.error){
                    localStorage.setItem('token', res.data.response.token)
                    dispatch({type:'oneUser', payload:{name: res.data.response.userExists?.name, 
                                                       photo: res.data.response.userExists?.urlphoto,
                                                       google: res.data.response.userExists?.google,
                                                       id: res.data.response.userExists?._id}})
                }else{
                        // console.log('res.data.response', res.data.response) 
                  return {errors: [{message: res.data.response}]}
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
            // console.log('toi en logInPersistent',token)
            try {
            //     const token = localStorage.getItem('token')
                const res = await axios.post('http://localhost:4000/api/siginPersistent/', {},{
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
                //  console.log(res.data.response.name)
                dispatch({type:'oneUser', payload:{name: res.data.response.name, 
                                                   photo: res.data.response.urlphoto,
                                                   google: res.data.response.google,
                                                   id: res.data.response._id}})
            }catch(error){
                 console.error(error)
                 return dispatch({type: 'logout'})
            }

        }
    },
    getUsers:() => {
        return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/users')
            // console.log(res.data.response)
            dispatch({type:'getUsers', payload:res.data.response})
        }
    }
   
}
export default authActions