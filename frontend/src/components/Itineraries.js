import React, { useEffect, useState } from 'react'
import { FcClock, FcLike, FcLikePlaceholder } from "react-icons/fc"
import { BsCash } from "react-icons/bs"
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import itineraryActions from '../redux/actions/itineraryActions'
import activityActions from '../redux/actions/activityActions'
import authActions from '../redux/actions/authActions'
import Activity from '../components/Activity'
import  Comments  from './Comments'

 const Itineraries = ({ itineraries, oneUser, changeLikes, getActivities, getUsers }) => {
    const [likes, setLikes]= useState(itineraries.likes) 
    const [show, setShow] = useState(true)
    const [activo, setActivo] = useState(null)
    const [close, setClose] = useState(true)
    const [activities, setActivities] = useState([])
    //  console.log(likesdata)

    useEffect(() => {
        getActivities(itineraries._id)
        .then((response) => {
            setActivities(response)
        })
    }, [close])

    useEffect(() => {
        getUsers()
    }, [])

    const handleChange = async () => {
        if(!oneUser.name){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'User must be logged in!',
                showConfirmButton: false,
                timer: 1500
               })
        }else{
         let res = await changeLikes(itineraries._id)
        //  console.log(res.data.response.itinerary.likes)
           setLikes(res.data.response.itinerary.likes) 
        } 
    } 
    console.log('activities',activities)         
    const changeClose = () => {
        setClose(!close)
    }
    return (
            <div className="container container_iti">
                <div className="contenedor_caja">
                    <div className="caja_top">
                        <div className="perfil">
                            <div className="perfil_img">
                                 <img src={itineraries.userimagen} width="50" height="50" alt="img usuario" className="img_user"/>
                            </div>
                            <div className="name_user">
                                <strong>{itineraries.username}</strong>
                            </div>
                        </div>
                        <div className="title">
                             <span>{itineraries.title}</span>
                        </div>
                    </div>
                    <div className="container_duration">
                        <div className="container_price">
                            <div className="div_price">
                                <span>Price:</span>
                                {
                                   [...Array(itineraries.price)].map((e, i) => <span id="span_fa" key={i}> <BsCash size={30} /> </span>)
                                }
                            </div> 
                            <div className="duration">
                                <span>Duration: 
                                {
                                    <span id="span_fa"><FcClock size={30} />{ itineraries.duration }</span>
                                }
                                </span>
                            </div> 
                            <div className="likes"><span onClick={() => handleChange()}>{likes.includes(oneUser.id) ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />} {likes.length}</span></div> 
                        </div>
                        <div className="span_has"><span id="span_has">{itineraries.hashtags}</span></div>
                        
                        {/* ACTIVITIES */}
                        <div className={close ? "hide" : "show"}>
                            <div><h2>Activities</h2></div>
                            <div className="activity">
                                {
                                    activities.map((activites) => <Activity activites={activites} key={activites._id}/>)
                                }
                            </div>
                            <Comments idItinerary={ itineraries._id } comments={ itineraries.comments } close={ close } setClose={ setClose }/>
                        </div>
                    </div>
                    <button className="btnView" onClick={changeClose}>{close ? " View More" : "View Less"}</button>
                </div>
            </div>
    )
}
const mapDispatchToProps = {
     changeLikes: itineraryActions.changeLikes,
     getActivities: activityActions.getActivities,
     getUsers: authActions.getUsers

}
const mapStateToProps = (state) =>{
    // console.log(state)
    return {
        oneUser: state.authReducer.oneUser,
        likesCurrent: state.itineraryReducer.likesCurrent
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
