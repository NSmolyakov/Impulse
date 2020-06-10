import React from 'react'

import noPhoto from '../../../assets/img/noPhoto.png'

import './AccountData.css'


const AccountData = (props) => {
    return(
        <div className='AccountData'>
             <div className='Account'>
                <img alt='UserPhoto' src={noPhoto} />
                <h3 className='UserName'>{props.name}</h3>
                <p className='Status'>{props.status}</p>
            </div>
        </div>
    )
}

export default AccountData