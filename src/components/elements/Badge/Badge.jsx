import React from 'react'

import './Badge.css'


const Badge = (props) => {
    let number = props.number
    return ( number === 0   ? <div></div>
                            : <p className='Badge'>{props.number}</p>
    )
}


export default Badge;