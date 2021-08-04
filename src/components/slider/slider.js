import React, { Component } from 'react';
import SliderSlick from "react-slick";
import DummyService from '../../services/dummy-service';
import './slider.css';

export default class Slider extends Component {

    state = {
        items: []
    }
  
    componentDidMount() {
      this.dummyService.getAllItems()
          .then((data) => {
              this.setState({
                  items: data
              })
          })
          .catch((err) => console.log(err))
    } 
  
    dummyService = new DummyService();

    render () {

        let settings = {
            slidesToShow: 3,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                    slidesToShow: 2
                }
                },
                {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1
                    }
                }
              ]
        };

        const items = this.state.items;
        const cards = items.map((item) => {
        
        const divStyle = {
            backgroundImage: 'url(' + item.imgUrl + ')'
        }

        return (
            <div key={item.id} className="card">
                <div className="card__img" style={divStyle}></div>
                <div className="card__inner">
                    <h3>{item.heading}</h3>
                    <p><span className="card__reduced-cost">{item.reducedCost}</span><span className="card__cost">{item.cost}</span></p>
                </div>
            </div>
        )
    })

        return (
            <div className="slider">
                <div className="slider__inner">
                    <h2>НОВЫЕ ПОСТУПЛЕНИЯ</h2>
                    <SliderSlick {...settings}>
                        {cards}
                    </SliderSlick>
                </div>
            </div>
        );
    }
};
