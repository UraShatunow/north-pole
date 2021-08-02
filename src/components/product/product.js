import React, { Component } from 'react';
import './product.css';

import DummyService from '../../services/dummy-service';

export default class Product extends Component {

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
            <div className="product">
                <div className="product__inner">
                    <h2>ВСЕ РЮКЗАКИ</h2>
                    <div className="product__items">
                        {cards}
                    </div>
                </div>
            </div>
        );
    }
};
