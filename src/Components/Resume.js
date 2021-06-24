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
    const education = this.props.data.education.map((education, index) => (
      <div key={ index }
           className="d-flex flex-column flex-sm-row-reverse justify-content-around align-items-start pb-5">
        <div className="col-sm-2 text-center firm">
          <img className="profile-pic" src={ "images/" + education.logo } alt="Basetis logo"/>
        </div>

        <div className="col-sm-7 d-flex flex-column ">
          <h3 className="pb-5">{ education.school }</h3>
          <div key={ index } className="d-flex flex-row mb-4">
            <div className="d-flex flex-column align-items-center mr-3">
            </div>
            <div className="d-flex flex-column">
              <p className="info">
                { education.degree }
                <span>&bull;</span> <em className="date">{ education.graduated }</em>
              </p>
              <p className="description">{ education.description }</p>
            </div>
          </div>
        </div>
      </div>
    ));

    const work = this.props.data.work.map((work, index) => ((
        <div key={ index }
             className="d-flex flex-column flex-sm-row justify-content-around align-items-start pb-5">
          <div className="col-sm-2 text-center firm">
            <img className="profile-pic" src={ "images/" + work.logo } alt="Basetis logo"/>
          </div>

          <div className="col-sm-9 d-flex flex-column ">
            <h3 className="pb-5">{ work.company }</h3>
            { work.rols && work.rols.map((rol, index) => (
              <div key={ index } className="d-flex flex-row mb-4">
                <div className="d-flex flex-column align-items-center mr-3">
                  { work.rols.length > 1 && (
                    <>
                      <div className="dot">·</div>
                      <div className="vertical-line"></div>
                    </>
                  ) }
                </div>
                <div className="d-flex flex-column">
                  <p className="info">
                    { rol.position }
                    <span>&bull;</span> <em className="date">{ rol.period }</em>
                  </p>
                  <p className="description">{ rol.description }</p>
                  <p></p>
                  <div className="d-flex flex-wrap">
                    { rol.technologies && (<p className="tech font-weight-bold">Technologies: </p>) }
                    { rol.technologies && rol.technologies.map((tech, index) => (
                      index === 0
                        ? (<p className="tech">{ tech.name }</p>)
                        : rol.technologies.indexOf(tech) < rol.technologies.length - 1
                        ? (<p className="tech">, { tech.name }</p>)
                        : (<p className="tech"> and { tech.name }</p>)
                    )) }
                  </div>
                  <div className="d-flex flex-wrap">
                    { rol.tools && (<p className="tech font-weight-bold">Tools: </p>) }
                    { rol.tools && rol.tools.map((tool, index) => (
                      index === 0
                        ? (<p className="tech">{ tool.name }</p>)
                        : rol.tools.indexOf(tool) < rol.tools.length - 1
                        ? (<p className="tech">, { tool.name }</p>)
                        : (<p className="tech"> and { tool.name }</p>)
                    )) }
                  </div>
                  <div className="d-flex flex-wrap">
                    { rol.methodology && (<p className="tech font-weight-bold">Methodology: </p>) }
                    { rol.methodology && rol.methodology.map((method, index) => (
                      index === 0
                        ? (<p className="tech">{ method.name }</p>)
                        : rol.methodology.indexOf(method) < rol.methodology.length - 1
                        ? (<p className="tech">, { method.name }</p>)
                        : (<p className="tech"> and { method.name }</p>)
                    )) }
                  </div>
                </div>
              </div>
            )) }
          </div>
        </div>)
    ));

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
          <div className="mx-auto pr-sm-5">{ work }</div>
        </div>


        <div className="d-flex flex-column">
          <div className="header-col mx-auto m-5">
            <h1 className="d-flex justify-content-center align-items-center p-3 border-bottom">
              <img className="section-icon" src={ "images/books.png" } alt="Experience"/>
              <span>Education</span>
            </h1>
          </div>
          <div className="mx-auto pr-sm-5">{ education }</div>
        </div>

        {/*{<div className="d-flex flex-column">
          <div className="header-col mx-auto">
            <h1 className="d-flex justify-content-center align-items-center p-3 border-bottom">
              <img className="section-icon" src={ "images/books.png" } alt="Education"/>
              <span>Education</span>
            </h1>
          </div>
          <div>{ education }</div>
        </div>}*/ }


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
