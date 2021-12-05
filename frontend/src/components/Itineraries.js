import React from 'react'

export const Itineraries = ({ itineraries }) => {

    return (
        <div>
            {
                itineraries.map((elem, i) => {
                    return (
                        <div className="container Container_iti" key={i}>
                            <div className="row itinerary_img">
                                <div className="foto col-md-4 order-1 order-sm-1 order-md-0">
                                    <div className="div_img"></div>
                                    <span>{elem.username}</span>
                                </div>
                                <div className="title col-md-8 order-0 order-sm-0 order-md-1"><span>{elem.comments}</span></div>
                            </div>
                            <div className="row price col-12">
                               <div className="col-md-4 bg-primary"><span className="far fa-usd-circle"><i></i>Price: {elem.price}</span></div> 
                               <div className="col-md-4 bg-secondary"><span>Duration: {elem.duration}</span></div> 
                               <div className="col-md-4 bg-success"><span>{elem.likes}</span></div> 
                               <div className="col-md-12  bg-danger"><span>{elem.hashtags}</span></div> 
                            </div>
                            <div className="activiti col-12"></div>
                            <div className="comments col-12">
                                <div></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
