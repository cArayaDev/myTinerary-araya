import React from 'react'

export const Activity = ({activites}) => {
    return (
        <div className="container_img">
            <div className="div_img_activity"><img src={require('../assets/activity/'+activites.img)} />
                <h5>{activites.activity}</h5>
            </div>
        </div>
    )
}
export default Activity