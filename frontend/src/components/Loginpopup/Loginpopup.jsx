import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Login")

    return (
        <div className='login_popup'>
            <form action="" className="login_popup_container">
                <div className="login_popup_title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login_popup_input">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Passowrd' required />
                </div>
                <button>{currState === "Sign up" ? "Create account" : "Login"}</button>
                <div className="login_popup_condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login" 
                ? <p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p> 
                : <p>Alredy have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
            </form>
        </div>
    )
}

export default Loginpopup
