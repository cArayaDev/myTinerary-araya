import React, { useState } from 'react'
import { FcClock, FcLike } from "react-icons/fc"
import { BsCash } from "react-icons/bs"
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import itineraryActions from '../redux/actions/itineraryActions'

 const Itineraries = ({ itineraries, oneUser, changeLikes, likes }) => {
    const [show, setShow] = useState(true)


    const handleChange = () => {
        // console.log(oneUser.name)
         (oneUser.name) ? 
         changeLikes(itineraries._id) 
         :      
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User must be logged in!',
            showConfirmButton: false,
            timer: 1500
          })
       
    } 
    return (
        <div>
            <div className="container Container_iti">
                <div className="row itinerary_img">
                    <div className="foto col-md-4 order-1 order-sm-1 order-md-0">
                        <div className="div_img" >
                            <img src={require('../assets/images/'+itineraries.userimagen)} alt="img usuario" className="img_user"/>
                        </div>
                        <span>{itineraries.username}</span>
                    </div>
                    <div className="title col-md-8 order-0 order-sm-0 order-md-1"><span>{itineraries.title}</span></div>
                </div>
                <div className="row price col-12">
                    <div className="col-md-4">
                        <span>Price: 
                            {
                                [...Array(itineraries.price)].map((e, i) => <span id="span_fa" key={i}> <BsCash size={30} /> </span>)
                            }
                        </span>
                    </div> 
                    <div className="col-md-4">
                        <span>Duration: 
                        {
                            [...Array(itineraries.duration)].map((e, i) => <span id="span_fa"key={i}><FcClock size={30} /></span>)
                        }
                        </span>
                    </div> 
                    <div className="col-md-4"><span onClick={() => handleChange()}><FcLike size={30}/> {itineraries.likes}</span></div> 
                    <div className="col-md-12 hashtags"><span id="span_has">{itineraries.hashtags}</span></div>
                </div>
                <div className="col-md-12 div_view" style={{ display: show ? "none" : "block" }}>
                    <h2>Under Construction</h2>
                </div>
                <div className="col-md-12 read_less"><span  onClick={() => setShow((s) => !s)} id="read_less" style={{ display: show ? "none" : "block" }}>Read Less</span></div> 
                <div className="col-md-12 view_more"><span onClick={() => setShow((s) => !s)} id="view_more" style={{ display: show ? "block" : "none" }}>View More</span></div> 
            </div>
        </div> 
    )
}
const mapDispatchToProps = {
     changeLikes: itineraryActions.changeLikes,
}
const mapStateToProps = (state) =>{
    // console.log(state)
    return {
        oneUser: state.authReducer.oneUser,
        likes: state.authReducer.likes
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
