import React, { Component } from 'react';

import Home from "./Home";
import ShoppingCart from "./ShoppingCart";

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      show: false,
      products: [],
      carts: [],
      loading: true
    };
  }

  handleClickShow = () => {
    this.setState({
      show: !this.state.show,
      loading: false
    })
  }


  addCars = (product) => {
    this.setState({
      carts: [...this.state.carts, product]

    })

  }

  removeProducts = (sku) => {
    let myArray = this.state.carts.filter(function (obj) {
      if (obj.sku !== sku) {
        return obj
      }
    })
    this.setState({
      carts: myArray
    })
  }

  componentDidMount() {
    fetch('https://api.bestbuy.com/beta/products/openBox?apiKey=vrjst2v5zsgemp3jq44xwmz9')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        this.setState({ products: data.results, loading: false })

      })
  }

  render() {
    console.log(this.state.products)
    return (

      <React.Fragment>
        {!this.state.loading && this.state.products && (
          <React.Fragment>
            <Home
              addCars={this.addCars}
              products={this.state.products}
              handleClickShow={this.handleClickShow}
              carts={this.state.carts}
            />
            <ShoppingCart
              removeProducts={this.removeProducts}
              show={this.state.show}
              handleClickShow={this.handleClickShow}
              carts={this.state.carts}
            />
          </React.Fragment>
        )}
      </React.Fragment>

    );
  }
}

export default App;
