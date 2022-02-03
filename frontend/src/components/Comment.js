import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import commentsActions from '../redux/actions/commentsActions'

const Comment = ({ oneUser, idItinerary, newComment, idNewComment, deleteCommentItineray, editCommentItineray, idUserComments, allUsers, control, close }) => {
    const [newComments, setNewComments] = useState(newComment)
    const [modify, setModify] = useState(false)
    // const [dataUsers, setDataUsers] = useState([])
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const input = useRef()

    useEffect(() => {
        setModify(false)
    }, [control])

    useEffect(() => {
        handleDataUser()  
    }, [control])

    const handleDelete = () => {
         deleteCommentItineray(idItinerary, idNewComment)
    }

    const handleDataUser = () => {
        allUsers &&  allUsers.map((elem) => {
            if(idUserComments === elem._id){
                setName(elem.name)
                setPhoto(elem.urlphoto)
            }
         })    
    }
    const useControl = idUserComments._id === oneUser.id
    // console.log(useControl) 

    const comment = <div className="div_text">
                        { 
                            !modify ?
                           <div><p styles="display: block" className="span_comment">{ newComment }</p></div>
                            : <div className="edit_text_btn">
                                    <textarea 
                                        className="text_edit_comment" 
                                        defaultValue={ newComment } 
                                        ref={ input }
                                        row="3"
                                        styles="display: none"
                                    >
                                        
                                    </textarea>
                                    <button 
                                        onClick={()=> editCommentItineray(idNewComment, input.current.value)} 
                                        className="btn_confirm"
                                        >
                                        Confirm
                                    </button>                                
                              </div>
                           
                        }
                        <div className="comments_buttons">
                            <img 
                            src={require("../assets/images/pencil.svg")} 
                            alt="img_pencil" 
                            onClick={()=>setModify(!modify)} 
                            className="img_pencilxx"
                            />
                            <img 
                            src={require("../assets/images/trash.svg")} 
                            alt="img_trash" 
                            onClick={handleDelete} 
                            className="img_trashxx"
                            />   
                        </div>                        
                    </div>

     const renderComment = useControl ? comment : <div className="new_comment"><p styles="display: block" >{ newComment }</p></div>

    return (
                <div className="comment">
                    <div className="user_pic_comment" style={{ backgroundImage:`url("${ idUserComments.urlphoto ? idUserComments.urlphoto : photo }")` }}> </div>
                    <div className="comment_name_text"> 
                        <span className="comment_user_name">{ idUserComments.name ? idUserComments.name : name }</span>
                        { renderComment }
                    </div>
                </div>
    )
}
const mapStateToProps = (state) => {
    return {
        oneUser: state.authReducer.oneUser,
        allUsers: state.authReducer.allUsers
    }   
}
const mapDispatchToProps = {
    deleteComment: commentsActions.deleteComment,
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)
