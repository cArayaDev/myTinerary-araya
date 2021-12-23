import React, {  useState, useRef } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import Comment from './Comment'
import commentsActions from '../redux/actions/commentsActions'

const Comments = ({ idItinerary, comments, addComment, deleteComment, editComment, oneUser }) => {
    const inputComment = useRef()
    const [newComments, setNewComments] = useState(comments)
    const [control, setControl] = useState (false)

    const addCommentItineray = () => {
        if(!oneUser.name){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'User must be logged in!',
                showConfirmButton: false,
                timer: 1500
               })
        }else{
            let value = inputComment.current.value
            if(value !== ''){
                addComment(idItinerary, value)
                .then((res) => {
                    // console.log(res.data.response)
                    setNewComments(res.data.response)
                    inputComment.current.value = ''
                })
                .catch(err => console.error(err))
            }
         } 
    }
    // console.log(newComments)
    const deleteCommentItineray = (idItinerary, idNewComment) => {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
                }).then((result) => {
                if (result.isConfirmed) {
                    deleteComment(idItinerary, idNewComment)
                    setNewComments(newComments.filter(elem => elem._id !== idNewComment))
  
                }
            })
    }

    const editCommentItineray = (commentId, comment) => {
        editComment(commentId, comment)
        .then((res)=> {
            if(res.data.success) {
            newComments.forEach(elem =>{
                if(elem._id === commentId){
                    elem.comment = comment
                }
            })
            setNewComments(newComments)
            setControl(!control)
            }
        })
        .catch(error =>console.log(error))
    }

    return (
    <div className="container_commentary">
        <div><h2>Comments</h2></div>
        <div className="div_comment">
         {
            newComments.map((elem ) => <Comment 
                                           idNewComment={elem._id}
                                           newComment={elem.comment} 
                                           deleteCommentItineray={deleteCommentItineray}  
                                           editCommentItineray={editCommentItineray}
                                           idItinerary={idItinerary} 
                                           control={control}
                                           key={ elem._id }
                                        />) 
         }   
        </div>
        <div className="commentary">
            <input type="text" className="commentsInputs" autoComplete="nope"
                name="comment"
                placeholder={"Write comment here..."}
                ref={ inputComment } 
            />
            <button className="btnSend" onClick={ addCommentItineray }>Send</button>
        </div>
    </div>
    )
}
const mapStateToProps = (state) => {
    return {
        oneUser: state.authReducer.oneUser
        //   token: state.users.token
    }   
}

const mapDispatchToProps = {
    addComment: commentsActions.addComment,
    editComment: commentsActions.editComment,
    deleteComment: commentsActions.deleteComment

}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)