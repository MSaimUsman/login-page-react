import React from "react"
import { Link } from "react-router-dom"

const Box = () => {
  return (
    <div>
      <div className="box">
        <div>
          <img
            src="assest/154-1543731_red-dragon-png.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="signin">
          <strong></strong>{" "}
        </div>
        <div className="platform">
          <i>Please login to use platform</i>
        </div>{" "}
        <br />
        <div className="name">
          <input type="email" placeholder="Enter Email" />
        </div>
        <br />
        <div className="password">
          <input type="password" maxlength="10" placeholder="Enter Password" />
        </div>
        <div className="remember-me">
          <input type="checkbox" />
          Remember me
        </div>
        <div className="login">
          <button className="login">login</button>
        </div>
        <br />
        <div className="forgot">
          <Link to="/forget-password">forgot my password?</Link>
        </div>
        <br />
        <div>
          Don't have an account?
          <div className="Create-account">
            {/* <a href="#blank-target.html" target="_blank"> */}
            <Link to="/Create/NewAccount">Create a free account</Link>
            {/* </a> */}
          </div>
        </div>
      </div>

      <div className="other-plat-form">
        OTHER SIGN-IN PLATFORM
        <div className="sign-in-logo">
          <a href="https:www.facebook.com/login/" className="btn-fb">
            f
          </a>
          <a
            href="https:accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2Fsecurity-checkup%3Fhl%3Den%26pli%3D1&ec=GAlAwAE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession"
            className="btn-g"
          >
            g
          </a>
        </div>
      </div>
    </div>
  )
}

export default Box
