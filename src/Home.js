import React, { Component } from "react";

class Home extends Component {
  handleClickBtnAdd = (product) => {
    const { addCars } = this.props;
    addCars(product);
  };
  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="Grid Grid--expanded">
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
            <button className="AddToCart" onClick={this.props.handleClickShow}>
              <span>{this.props.carts.length}</span>
              <img src="https://codyhouse.co/demo/quick-add-to-cart/img/cd-icon-cart.svg" />
            </button>
          </div>
          <div className="container">
            {this.props.products.map(product => {
              return (
                <ul className="Products Grid Grid--expanded">
                  <li key="1" className="Product">
                    <div className="Product__cover">
                      <img className='Product__img' src={product.images.standard} />
                      <button onClick={() => this.handleClickBtnAdd(product)} className="Product__cart" >Add to Cart</button>
                    </div>
                    <div className="Grid Grid--expanded">
                      <strong className="Product__name">{product.names.title}</strong>
                      <strong className="Product__price">$ {product.prices.regular}</strong>
                    </div>
                  </li>
                </ul>
              )
            })
            }
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Home;
