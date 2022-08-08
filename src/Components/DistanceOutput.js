import React from 'react'
import '../Styles/distanceoutput.css'

export default function DistanceOutput({distance}) {
    return (
        <div className='distanceoutput'>
            <div className="distanceoutput__top">
                <h4>Distance</h4>
                <h2>{distance}</h2>
            </div>
            <div className="distanceoutput__bottom">
                <p>The distance between <strong>Mumbai</strong> and <strong>Delhi</strong> is <strong>{distance}.</strong></p>
            </div>
        </div>
    )
}
