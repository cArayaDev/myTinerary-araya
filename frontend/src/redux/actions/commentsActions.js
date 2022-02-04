import axios from "axios"

const commentsActions = {
    addComment: (itineraryId, newComment) => {
        return async (dispatch, getState) => {
            const token = localStorage.getItem('token')
            // console.log(newComment)
            let res = await axios.post('https://mytinerary-coquimbo.herokuapp.com/api/comments/'+itineraryId, {newComment}, {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if (res.data.success){
                dispatch({type: "comment", payload: res.data.response})
            }
            return res
        }
    },
    deleteComment: (idItinerary, idNewComment) => {
        return async (dispatch, getState) => {
            const token = localStorage.getItem('token')
            let res = await axios.put('https://mytinerary-coquimbo.herokuapp.com/api/comments/'+idItinerary, {idNewComment}, {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            if (res.data.success){
                dispatch({type: "comment", payload: res.data.response})
            }
            return res
        }

    },
    editComment:  (commentId, comment) => {
        return async (dispatch, getState) => {
                const token = localStorage.getItem('token')
                let response = await axios.put('https://mytinerary-coquimbo.herokuapp.com/api/editcomments/'+commentId, {comment}, {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
                // console.log(response)
                if (response.data.success){
                    dispatch({type: "comment", payload: response.data.response})
                }
                return response
            }            
        }
}

export default commentsActions