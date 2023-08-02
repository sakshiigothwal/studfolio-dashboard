import React from 'react'
import './body.css'
import Top from './Top Section/Top'
import Listing from './Listing Section/Listing'
import Activity from './Activity Section/Activity'

const Body = () => {
    return (
        <div className='mainContent'>
            <Top/>

            <div className='bottom flex'></div>
            <Listing/> <Activity/>
        </div>
    )
}

export default Body