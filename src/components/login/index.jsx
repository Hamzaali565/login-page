import React from "react";
import "./index.css"
let Login = () =>{
return(
    <div className="main">
{/* image */}
<div className="image">

</div>
{/* form */}
<div className="form">
    <div className="LTC">
    Login to continue with
    </div>
    {/* <div className="inputs">
        <div><input type="text" placeholder="Email" name="" id="" /></div>
        <div><input type="text" placeholder="Password" name="" id="" /></div>
    </div> */}
    <div className="TAS">
    <div class="customfield"> 
        <input type="text" required />
        <span class="placeholder">Email</span>
    </div>
    <div class="customfield"> 
        <input type="Password" required />
        <span class="placeholder">Password</span>
    </div>
    </div>
    <div className="remgot">
        <div><input type="checkbox" name="" id="" />Remember me</div>
        <div className="mainFor">Forgot Password?</div>
    </div>
    <div className="logButton">
        <button>LOGIN</button>
    </div>
    <div className="SL">
    or sign up using
    </div>
    <div className="icons">
<div><img src="https://cdn-icons-png.flaticon.com/512/37/37409.png" alt="" /></div>
<div><img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" /> </div>
    </div>
</div>

    </div>
)


};
export default Login