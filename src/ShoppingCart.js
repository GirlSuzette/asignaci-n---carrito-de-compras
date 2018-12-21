import React, { Component } from "react";


class ShoppingCart extends Component {
  handleRemove = (product) => {
    const { removeProducts } = this.props;
    removeProducts(product);
  };

  calculateTotal() {
    const prices = this.props.carts.map(p => p.prices.regular);
    return prices.reduce((a, b) => a + b, 0).toFixed(2);
  }

  render() {
    return (
      <aside>
        <div className={(this.props.show) ? "ShoppingCart is-visible" : "ShoppingCart"}>
          <header className="ShoppingCart__header">
            <div>
              <h3 className="ShoppingCart__title">Your Cart</h3>
              <button className="ShoppingCart__close" onClick={this.props.handleClickShow}>
                <img src="https://cdn3.iconfinder.com/data/icons/interface/100/close_button-512.png" />
              </button>
            </div>
          </header>
          <div>
            {this.props.carts.map(cart => {
              return (
                <ul className="ShoppingCart__list">
                  <li className="Grid Item">
                    <div className="Item__Cover">
                      <img src={cart.images.standard} />
                    </div>
                    <div className="Item__Description">
                      <div>
                        <div className="Grid Grid--expanded">
                          <div>
                            <h3>{cart.names.title}</h3>
                            <span>{cart.descriptions.short}</span>
                          </div>
                          <div>
                            <button onClick={() => this.handleRemove(cart.sku)}><i className="fa fa-trash" /></button>
                          </div>
                        </div>
                      </div>
                      <div className="Grid Grid--expanded Grid--center Item--ts">
                        <select>
                          <option>1</option>
                        </select>
                        <p>$ {cart.prices.regular}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              )
            })
            }
            <footer>
              <div className="Grid Grid--expanded">
                <span>Subtotal:</span>
                <strong>$ {this.calculateTotal()}</strong>
              </div>
              <button>Checkout</button>
            </footer>
          </div>
        </div>
      </aside>
    );
  }
}

export default ShoppingCart;
