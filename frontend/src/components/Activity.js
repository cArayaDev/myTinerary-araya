import React from 'react'

export const Activity = ({activites}) => {
    return (
        <div className="container_img">
            <div className="img1"><img src={require('../assets/activity/'+activites.img)} />
                <h5>{activites.activity}</h5>
            </div>
        </div>
    )
}
export default Activity