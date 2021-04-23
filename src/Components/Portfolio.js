import React, { Component } from "react";
import Zmage from "react-zmage";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

let id = 0;

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={ id++ } className="columns portfolio-item item">
          <div className="item-wrap">
            <a href={projects.url} target="_blank"><img alt={ projects.title } src={ projectImage }/> </a>
            <div style={ { textAlign: "center" } }>{ projects.title }</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="carousel-container">
            <h1>Check Out Some of My Works</h1>

            <OwlCarousel className='owl-theme' loop  autoplayTimeout={ 1500 } autoplayHoverPause items={ 1 } autoHeightClass
                         margin={ 5 } responsive={ {
              0: {
                items: 1
              },
              576: {
                items: 2
              },
              768: {
                items: 4
              }
            }
            }>
              { projects }
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
