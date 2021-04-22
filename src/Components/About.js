import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Nordic Giant Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city}, {state}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <a href={"mailto:"+email}>{email}</a>
                </p>
              </div>
              <div className="columns download">
                  <a href={resumeDownload} className="button" target="_blank">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
