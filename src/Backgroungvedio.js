import React, { useState } from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "react-background-video-player";
import { Row } from "react-bootstrap";
import "./styles.css";
import { useFormik } from "formik";

 export function Backgroungvedio() {

  return (
   
    <div className="App">
      <VideoPlayer
        className="video"
        src={
          "https://player.vimeo.com/external/314181352.sd.mp4?s=d2cd7a37f6250cd543e6d13209730b4bcf242130&profile_id=164&oauth2_token_id=57447761"
        }
        autoPlay={true}
        muted={true}
      />
      {/* <div className="mainInput">
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Where to?"
        />
      </div>
      <div className="mainInputs">
      <select>
  <option value="someOption">Some option</option>
  <option value="otherOption">Other option</option>
</select>
      </div> */}
<form  >
      <center>
 <div className="mainInput">
        <form className="mainInput">
          <div className="mainInput">
            <h3 className="mainInput">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary"  >
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3" >
              <label><b style={{marginRight:"180px"}}>Email address</b></label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label><b style={{marginRight:"180px"}}>Password</b></label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="mainInput">
              <button type="submit" style={{backgroundColor:""}}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
      </center>
      </form>

    </div>
  );
}


