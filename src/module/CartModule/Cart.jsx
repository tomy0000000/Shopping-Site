import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import CartItem from "../CartItemModule/CartItem";
import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { appState } = this.props;
    return (
      <ul className="list-unstyled">
        {appState.cart.map((item) => (
          <CartItem key={item} name={item} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state,
  };
};

export default compose(connect(mapStateToProps))(Cart);
