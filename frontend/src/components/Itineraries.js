import React from 'react'
import { FcClock, ImCoinDollar, FcCurrencyExchange, FcLike } from "react-icons/fc";
import { BsCash } from "react-icons/bs";

export const Itineraries = ({ itineraries }) => {
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
                <div className="col-md-12 div_view"><span>View More</span></div> 
                <div className="activiti col-12 bg-primary">
                    <h2>Under Construction</h2>
                </div>
                <div className="comments col-12">
                    <div></div>
                </div>
            </div>
        </div>
    )
}
