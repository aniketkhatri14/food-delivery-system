import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'

const Appdownload = () => {
    return (
        <div className='App_download' id='App_download'>
            <p>For Better Experience Download <br /> Tomato App</p>
            <div className="app_download_platform">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" /></div>
        </div>
    )
}

export default Appdownload
