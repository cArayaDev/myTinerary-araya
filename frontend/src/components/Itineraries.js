import React from 'react'

export const Itineraries = ({ itineraries }) => {

    return (
        <div>
            {
                itineraries.map((elem, i) => {
                    return (
                        <div className="container Container_iti" key={i}>
                            <div className="row itinerary_img">
                                <div className="foto col-4"><span>{elem.comments}</span></div>
                                <div className="title col-8"><h2>holaaaaaaa</h2></div>
                            </div>
                            <div className="price col-12"></div>
                            <div className="activiti col-12"></div>
                            <div className="comments col-12"></div>
                        </div>
                    )
                })
            }
        </div>
    )
}
