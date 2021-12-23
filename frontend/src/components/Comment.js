import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import commentsActions from '../redux/actions/commentsActions'
import Swal from 'sweetalert2'

const Comment = ({ oneUser, idItinerary, newComment, idNewComment, deleteCommentItineray, editCommentItineray, control }) => {
    const [newComments, setNewComments] = useState(newComment)
    const [modify, setModify] = useState(false)
    const input = useRef()

    useEffect(() => {
        setModify(false)
    }, [control])

    const handleDelete = () => {
         deleteCommentItineray(idItinerary, idNewComment)
    }
    const useControl = idNewComment === oneUser.id
//  console.log(oneUser.name)
    return (
         <div className="container_comments"> 
            <div className="div_data">
                <div className="container_name">
                    <div className="user_photo" style={{backgroundImage:`url("${oneUser.photo}")` }}> </div>
                    <h6>{oneUser.name}</h6>
                </div>
                { idNewComment ?
                    <div className="textArea">
                        <div>
                            {!modify ?
                                 <p>{newComment}</p>
                            :
                                <>
                                    <input type="text" defaultValue={newComment} ref={input}/>
                                    <img src={require("../assets/images/send.png")} alt="img_send" onClick={()=> editCommentItineray(idNewComment, input.current.value)} className="img_send"/>
                                </>
                            }
                        </div>
                        <img src={require("../assets/images/pencil.svg")} alt="img_pencil" onClick={()=>setModify(!modify)} className="img_pencil"/>
                        <img src={require("../assets/images/trash.svg")} alt="img_trash" onClick={handleDelete} className="img_trash"/>  
                    </div>
                    :
                    <p>{newComment}</p>
                }
            </div>
         </div>   
    )
}
const mapStateToProps = (state) => {
    return {
        oneUser: state.authReducer.oneUser
    }   
}
const mapDispatchToProps = {
    deleteComment: commentsActions.deleteComment
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)
