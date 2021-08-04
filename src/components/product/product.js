import React, { Component } from 'react';
import './product.css';

import DummyService from '../../services/dummy-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


export default class Product extends Component {

    state = {
        items: [],
        isLoading: true,
        hasError: false
    }
  
    componentDidMount() {
      this.dummyService.getShopItems()
          .then((data) => {
              this.setState({
                  items: data,
                  isLoading: false
              })
          })
          .catch(() => {
              this.setState({
                  isLoading: false,
                  hasError: true
              })
          })
    } 
    
    componentDidCatch() {
        this.setState({
            isLoading: false,
            hasError: true
        })
    }

    dummyService = new DummyService();

    render () {

        const items = this.state.items;
        const loading = this.state.isLoading;
        const error = this.state.hasError;

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

        if (loading) {
            return (
                <div className="product">
                    <div className="product__inner">
                        <Spinner />
                    </div>
                </div>
            );
        }

        if (error) {
            return (
                <div className="product">
                    <div className="product__inner">
                        <ErrorIndicator />
                    </div>
                </div>
            );
        }

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
