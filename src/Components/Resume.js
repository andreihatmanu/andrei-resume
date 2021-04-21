import React, { Component } from "react";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;
    const profilepic = "images/" + this.props.data.image;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={ education.school }>
          <h3>{ education.school }</h3>
          <p className="info">
            { education.degree } <span>&bull;</span>
            <em className="date">{ education.graduated }</em>
          </p>
          <p>{ education.description }</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={ work.company } className="d-flex flex-column flex-sm-row justify-content-around align-items-center">
          <div className="col-sm-4 col-md-3 text-center">
            <img className="profile-pic" src={ "images/" + work.logo } alt="Basetis logo"/>
          </div>
          <div className="col-sm-8 col-md-9 d-flex flex-column ">
            <h3>{ work.company }</h3>
            <p className="info">
              { work.title }
              <span>&bull;</span> <em className="date">{ work.years }</em>
            </p>
            <p>{ work.description }</p>
          </div>
        </div>
      );
    });

    const skills = this.props.data.skills.map(skill => {


      return (
        <div className="d-flex flex-column card m-3" key={ skill.name }>
          <img className="skill-pic" src={ "images/" + skill.logo } alt={ skill.name + " logo" }/>
          <div className="d-flex flex-column justify-content-center align-items-center info">
            <h1>{ skill.name }</h1>
            <p>{ skill.resume }</p>
          </div>
        </div>
      );
    });

    return (
      <section id="resume">
        <div className="d-flex flex-column">
          <div className="header-col mx-auto m-5">
            <h1 className="d-flex justify-content-center align-items-center p-3 border-bottom">
              <img className="section-icon" src={ "images/job-search.png" } alt="Experience"/>
              <span>Experience</span>
            </h1>
          </div>
          <div>{ work }</div>
        </div>

        <div className="d-flex flex-column">
          <div className="header-col mx-auto">
            <h1 className="d-flex justify-content-center align-items-center p-3 border-bottom">
              <img className="section-icon" src={ "images/books.png" } alt="Education"/>
              <span>Education</span>
            </h1>
          </div>
          <div>{ education }</div>
        </div>


        <div className="d-flex flex-column">
          <div className="header-col mx-auto m-5">
            <h1 className="d-flex justify-content-center align-items-center p-3 border-bottom">
              <img className="section-icon" src={ "images/skills.png" } alt="Skills"/>
              <span>Skills</span>
            </h1>
          </div>

          <div className="d-flex justify-content-center">
            <ul className="d-flex flex-wrap justify-content-around skills">{ skills }</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
