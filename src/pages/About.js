import React, { Component } from "react";
import "./About.css"
import photo from "../assets/profilePic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                src={photo}
                className="profile_image"
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Yoto Kim</div>
              <div className="brief_description">
                Hello! My name is Yoto Kim and I am a second-year at UC San Diego majoring in Math and Computer Science.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
