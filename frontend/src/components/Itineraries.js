import React, { useEffect, useState } from 'react'
import { FcClock, FcLike, FcLikePlaceholder } from "react-icons/fc"
import { BsCash } from "react-icons/bs"
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import itineraryActions from '../redux/actions/itineraryActions'
import activityActions from '../redux/actions/activityActions'
import Activity from '../components/Activity'

 const Itineraries = ({ itineraries, oneUser, changeLikes, getActivities }) => {
    const [likes, setLikes]= useState(itineraries.likes) 
    const [show, setShow] = useState(true)
    const [activo, setActivo] = useState(null)
    const [activities, setActivities] = useState([])

    useEffect(() => {
        getActivities(itineraries._id)
        .then((response) => {
            setActivities(response)
        })
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
           setLikes(res.data.response.itinerary.likes) //Viene directamente del itinerayActons
        } 
      console.log(activities)         
        } 
    return (
            <div className="container container_iti">
                <div className="contenedor_caja">
                    <div className="caja_top">
                        <div className="perfil">
                            <div className="perfil_img">
                            <img src={require('../assets/users/'+itineraries.userimagen)} alt="img usuario" className="img_user"/>
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
                                <div className="">
                                    <span>Price: 
                                        {
                                            [...Array(itineraries.price)].map((e, i) => <span id="span_fa" key={i}> <BsCash size={30} /> </span>)
                                        }
                                    </span>
                                </div> 
                                <div className="">
                                    <span>Duration: 
                                    {
                                        [...Array(itineraries.duration)].map((e, i) => <span id="span_fa"key={i}><FcClock size={30} /></span>)
                                    }
                                    </span>
                                </div> 
                                <div className="lokes"><span onClick={() => handleChange()}>{likes.includes(oneUser.id) ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />} {likes.length}</span></div> 
                            </div>
                            <div className="span_has"><span id="span_has">{itineraries.hashtags}</span></div>
                            <div className="container_activity">
                               <div><h2>Activities</h2></div>
                                <div className="activity">
                                    {
                                        activities.map((activites) => <Activity activites={activites} key={activites._id}/>)
                                    }
                                      
                                 </div>
                            </div>
                            <div className="container_commentary">
                            <div><h2>Commentaries</h2></div>
                                <div className="commentary">
                                    <input type="text" className="commentsInputs" autoComplete="nope"
                                        name="comment"
                                        placeholder={"You have to log in to comment"}
                                    />
                                    <button className="sendComment">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )
}
const mapDispatchToProps = {
     changeLikes: itineraryActions.changeLikes,
     getActivities: activityActions.getActivities,
}
const mapStateToProps = (state) =>{
    // console.log(state)
    return {
        oneUser: state.authReducer.oneUser,
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
