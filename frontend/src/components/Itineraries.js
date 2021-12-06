import React, { useState } from 'react'
import { FcClock, ImCoinDollar, FcCurrencyExchange, FcLike } from "react-icons/fc";
import { BsCash } from "react-icons/bs";

export const Itineraries = ({ itineraries }) => {
    const [show, setShow] = useState(true)
// console.log(itineraries)
    return (

        <div>
            <div className="container Container_iti">
                <div className="row itinerary_img">
                    {/* <img src={require('../assets/images/losangeles1.jpg')}alt="img fondo"/> */}
                    <div className="foto col-md-4 order-1 order-sm-1 order-md-0">
                        <div className="div_img">
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
                                [...Array(itineraries.price)].map((e, i) => <BsCash size={30} key={i}/>)
                            }
                        </span>
                    </div> 
                    <div className="col-md-4">
                        <span>Duration: 
                        {
                                [...Array(itineraries.duration)].map((e, i) => <FcClock size={30} key={i}/>)
                        }
                        </span>
                    </div> 
                    <div className="col-md-4"><span><FcLike size={30}/> {itineraries.likes}</span></div> 
                    <div className="col-md-12 hashtags"><span>{itineraries.hashtags}</span></div>
                </div>
                <div className="col-md-12 div_view" style={{ display: show ? "none" : "block" }}>
                    <h2>Under Construction</h2>
                   
                    {/* <a href="#" id="read_less">Read Less</a> */}
                </div>
                <div className="col-md-12 read_less"><span  onClick={() => setShow((s) => !s)} id="read_less" style={{ display: show ? "none" : "block" }}>Read Less</span></div> 
                <div className="col-md-12 view_more"><span onClick={() => setShow((s) => !s)} id="view_more" style={{ display: show ? "block" : "none" }}>View More</span></div> 
            </div>
        </div>
    )
}
